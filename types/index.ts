export * from './state'

export interface Account {
  numder: string;
}

export interface AccountBalance {
  accountNumber: string;
  dateUpdate: string;
  balance: string;
}

export interface Operation {
  date: string;
  accountNumberDebit: string;
  accountNumberCredit: string;
  amount: number;
}
