import { ITransaction } from "./ITransactions";

export interface ITransactionsStore {
    transactions: ITransaction[];
    totalEntry: number;
    totalExpenses: number;
    balance: number;
    addTransaction: (transaction: ITransaction) => void;
    removeTransaction: (id: string) => void;
    findTransactions: () => void;
    removeAllTransactions: () => void;
  }