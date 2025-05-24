import { ITransaction, TransactionType } from "../interfaces/ITransactions";

export const calculateTotal = (
  transactions: ITransaction[],
  type: TransactionType
) => {
  return transactions
    .filter((t) => t.type === type)
    .reduce((acc, t) => acc + t.value, 0);
};
