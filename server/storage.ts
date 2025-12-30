import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { type Subscriber, type InsertSubscriber } from "@shared/schema";

export interface IStorage {
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

export class GoogleSheetsStorage implements IStorage {
  private doc: GoogleSpreadsheet | null = null;

  private async getDoc() {
    if (this.doc) return this.doc;

    const privateKey = process.env.GOOGLE_SHEETS_API_KEY
      ?.replace(/\\n/g, '\n')
      .replace(/\n/g, '\n')
      .replace(/"/g, '')
      .trim();

    if (!privateKey || !privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
      console.error("Storage Error: GOOGLE_SHEETS_API_KEY is missing or incorrectly formatted. Check your Secrets.");
      throw new Error("Invalid or missing GOOGLE_SHEETS_API_KEY. Ensure it's a full Service Account Private Key.");
    }

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      console.error("Storage Error: GOOGLE_SERVICE_ACCOUNT_EMAIL is missing.");
      throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL secret.");
    }

    const auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: privateKey,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file',
      ],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_ID!, auth);
    await doc.loadInfo();
    this.doc = doc;
    return this.doc;
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const doc = await this.getDoc();
    const sheet = doc.sheetsByIndex[0];
    
    // Ensure headers exist
    try {
      await sheet.loadHeaderRow();
      if (!sheet.headerValues.includes('email')) {
        await sheet.setHeaderRow(['email', 'createdAt']);
      }
    } catch (e) {
      console.log("Setting headers for the first time...");
      await sheet.setHeaderRow(['email', 'createdAt']);
    }

    try {
      console.log("Adding row for email:", insertSubscriber.email);
      const row = await sheet.addRow({
        email: insertSubscriber.email,
        createdAt: new Date().toISOString()
      });

      if (!row) {
        throw new Error("Google Sheets API returned no row. This usually means the sheet is not accessible.");
      }

      return {
        id: row.rowNumber || Math.floor(Math.random() * 1000000),
        email: insertSubscriber.email,
        createdAt: new Date()
      };
    } catch (addError: any) {
      console.error("Sheet AddRow Error Details:", addError?.message || addError);
      throw new Error(`Failed to save to Google Sheets: ${addError?.message || "Unknown error"}. Ensure the sheet is shared with ${process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL}`);
    }
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const doc = await this.getDoc();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    
    const row = rows.find(r => r.get('email') === email);
    if (!row) return undefined;

    return {
      id: row.rowNumber,
      email: row.get('email'),
      createdAt: new Date(row.get('createdAt'))
    };
  }
}

export const storage = new GoogleSheetsStorage();
