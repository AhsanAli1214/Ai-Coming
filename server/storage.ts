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
      .replace(/\n/g, '\n') // Ensure actual newlines
      .replace(/"/g, '')
      .trim();

    if (!privateKey || !privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
      console.error("Storage Error: GOOGLE_SHEETS_API_KEY is missing or incorrectly formatted");
      throw new Error("Invalid or missing GOOGLE_SHEETS_API_KEY. Ensure it's a full Service Account Private Key.");
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
    await sheet.loadHeaderRow().catch(async () => {
      await sheet.setHeaderRow(['email', 'createdAt']);
    });

    try {
      const row = await sheet.addRow({
        email: insertSubscriber.email,
        createdAt: new Date().toISOString()
      });

      if (!row) {
        throw new Error("Failed to add row to Google Sheet. Check if the sheet is shared correctly.");
      }

      // Handle row access safely for both versions of the library
      const emailValue = row.get ? row.get('email') : (row as any).email;
      const createdAtValue = row.get ? row.get('createdAt') : (row as any).createdAt;

      return {
        id: row.rowNumber || Math.floor(Math.random() * 1000000),
        email: emailValue || insertSubscriber.email,
        createdAt: createdAtValue ? new Date(createdAtValue) : new Date()
      };
    } catch (addError) {
      console.error("Sheet AddRow Error:", addError);
      throw new Error("Failed to save to Google Sheets. Please ensure the sheet is shared with the service account email.");
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
