export interface Account {
  id: string;
  type: string;
  amount: number;
}

export type Instrument = Account[];

export interface Category {
  [key: string]: Instrument;
}

export interface CategoryTypes {
  assets: Instrument;
  liabilities: Instrument;
  balances: object[];
}

export interface InstrumentTypes {
  daylightOverdrafts: Account[];
  customerDeposits: Account[];
  customerOverdrafts: Account[];
  customerLoans: Account[];
  bankDeposits: Account[];
  bankOverdrafts: Account[];
  bankLoans: Account[];
  chCertificates: Account[];
  chOverdrafts: Account[];
  chLoans: Account[];
  dues: Account[];
  mortgages: Account[];
}
export interface IBank {
  id: string;
  type: string;
  assets: Category;
  liabilities: Category;
  balances: Category;
  reserves: number;
  records: any;
  member?: boolean;
}
export type CategoryKey = keyof CategoryTypes;
export type InstrumentKey = keyof InstrumentTypes;

export interface IBankLookup {
  [key: string]: IBank;
}
export interface ICustomerLookup {
  [key: string]: IBank;
}

export interface IRecord {
  id: string;
  accountId: string;
  accountType: InstrumentKey;
  transactionAmount: number;
  balance: number;
  credit: boolean;
}

export interface Record {
  recordId: string;
  transactionType: string;
  instrumentType: string;
  balance: number;
  party: string;
  amount: number;
  credit: boolean;
}