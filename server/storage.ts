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

    const auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_SHEETS_API_KEY?.replace(/\\n/g, '\n').replace(/"/g, ''),
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
    
    const row = await sheet.addRow({
      email: insertSubscriber.email,
      createdAt: new Date().toISOString()
    });

    return {
      id: row.rowNumber,
      email: insertSubscriber.email,
      createdAt: new Date()
    };
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
