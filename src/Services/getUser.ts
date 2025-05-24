import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUser = async () => {
  const user = await AsyncStorage.getItem("@user");
  if (user !== null) return JSON.parse(user);
  return undefined;
};
