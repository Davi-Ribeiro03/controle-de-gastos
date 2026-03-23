import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { saveTransaction } from "../Services/saveTransaction";
import { getTransactions } from "../Services/getTransactions";
import { calculateTotal } from "../Services/calculateTotal";
import { ITransactionsStore } from "../interfaces/ITransactionStore";
import api from "../api";

export const useTransactionStore = create<ITransactionsStore>()((set, get) => ({
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
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const date = "2026-02-01";
    const { data: res } = await api.get(
      // "/transaction" + `?monthReference=${year}/0${month}/01`,
      "/transaction" + `?monthReference=${date}`,
    );

    set(() => {
      return {
        transactions: res?.data?.transactions || [],
        totalEntry: res?.data?.totalEntry || 0,
        totalExpenses: res?.data?.totalExpense || 0,
        balance: res?.data?.balance || 0,
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
