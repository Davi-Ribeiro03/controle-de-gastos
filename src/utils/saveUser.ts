import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUser = async (user: { name: string; email: string }) => {
  await AsyncStorage.setItem("@user", JSON.stringify(user));
};
