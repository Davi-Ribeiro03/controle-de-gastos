import AsyncStorage from "@react-native-async-storage/async-storage";

export const deleteUserSession = async () => {
  await AsyncStorage.removeItem("@user");
};
