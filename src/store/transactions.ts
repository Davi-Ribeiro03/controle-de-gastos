import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { ITransactionsStore } from "../interfaces/ITransactionStore";
import api from "../api";

export const useTransactionStore = create<ITransactionsStore>()((set, get) => ({
  transactions: [],
  totalEntry: 0,
  totalExpenses: 0,
  balance: 0,
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
  addTransaction: async (transaction) => {
    await api.post("/transaction", {
      ...transaction,
      userId: 1,
    });
    get().findTransactions();
  },
  editTransaction: async (transaction) => {
    await api.put("/transactions", transaction);
    get().findTransactions();
  },
  removeTransaction: async (id) => {
    await api.delete(`/transactions/${id}`);

    get().findTransactions();
  },
}));
