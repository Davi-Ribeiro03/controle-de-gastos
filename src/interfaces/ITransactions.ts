export interface ITransaction {
  id?: string;
  title: string;
  date: Date;
  category: string;
  description: string;
  value: number;
  type: TransactionType;
  monthReference: Date;
}

export type TransactionType = "entry" | "expense";
