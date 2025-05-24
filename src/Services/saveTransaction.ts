import AsyncStorage from "@react-native-async-storage/async-storage";

interface ITransaction {
  id: string;
  title: string;
  date: string;
  category: string;
  value: number;
}

export const saveTransaction = async (transaction: ITransaction[]) =>
  await AsyncStorage.setItem("@transactions", JSON.stringify(transaction));
