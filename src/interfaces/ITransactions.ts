export interface ITransaction {
  id: string;
  title: string;
  date: string;
  category: string;
  value: number;
  type: TransactionType;
}

export type TransactionType = "entry" | "expense";
