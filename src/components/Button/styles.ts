import { StyleSheet } from "react-native";
import { colors } from "../../Constants";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    width: 240,
    marginHorizontal: "auto",
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
