import { StyleSheet } from "react-native";
import { colors } from "../../Constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  addTransactionContainer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  transactionTypeSelector: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    gap: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 10,
    height: 60,
    marginBottom: 14,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
  inputValue: {
    width: "76%",
    borderColor: "black",
    paddingVertical: 2,
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 18,
  },
});
