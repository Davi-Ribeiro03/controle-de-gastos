import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { saveTransaction } from "../Services/saveTransaction";
import { getTransactions } from "../Services/getTransactions";
import { ITransaction } from "../interfaces/ITransactions";
import { calculateTotal } from "../Services/calculateTotal";

interface ITransactionsState {
  transactions: ITransaction[];
  totalEntry: number;
  totalExpenses: number;
  balance: number;
  addTransaction: (transaction: ITransaction) => void;
  removeTransaction?: (id: string) => void;
  findTransactions: () => void;
  removeAllTransactions: () => void;
}

export const useTransactionStore = create<ITransactionsState>()((set, get) => ({
  transactions: [],
  totalEntry: 0,
  totalExpenses: 0,
  balance: 0,
  addTransaction: async ({ id, title, date, category, value, type }) => {
    const updatedTransactions = [
      ...get().transactions,
      { id, title, date, category, value, type },
    ];

    await saveTransaction(updatedTransactions);

    set(() => {
      const totalEntry = calculateTotal(updatedTransactions, "entry");

      const totalExpenses = calculateTotal(updatedTransactions, "expense");

      return {
        transactions: updatedTransactions,
        totalEntry,
        totalExpenses,
        balance: totalEntry - totalExpenses,
      };
    });
  },
  findTransactions: async () => {
    const transactions = await getTransactions();

    set(() => {
      const totalEntry = calculateTotal(transactions, "entry");

      const totalExpenses = calculateTotal(transactions, "expense");

      return {
        transactions,
        totalEntry,
        totalExpenses,
        balance: totalEntry - totalExpenses,
      };
    });
  },
  removeAllTransactions: async () => {
    await AsyncStorage.removeItem("@transactions");

    set({
      transactions: [],
      totalEntry: 0,
      totalExpenses: 0,
      balance: 0,
    });
  },
  removeTransaction: async (id) => {
    const updatedTransactions = get().transactions.filter((t) => t.id !== id);
    await saveTransaction(updatedTransactions);

    const totalEntry = calculateTotal(updatedTransactions, "entry");

    const totalExpenses = calculateTotal(updatedTransactions, "expense");

    set({
      transactions: updatedTransactions,
      totalEntry,
      totalExpenses,
      balance: totalEntry - totalExpenses,
    });
  },
}));
