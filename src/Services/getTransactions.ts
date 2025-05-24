import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITransaction } from "../interfaces/ITransactions";

export const getTransactions = async (): Promise<ITransaction[]> => {
  try {
    const transactions = await AsyncStorage.getItem("@transactions");

    if (transactions) return JSON.parse(transactions);
    return [];
  } catch (error) {
    return [];
  }
};
