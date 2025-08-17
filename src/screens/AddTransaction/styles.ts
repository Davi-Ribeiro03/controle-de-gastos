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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 60,
    marginBottom: 24,
    gap: 6
  },
  inputValue: {
    width: "100%",
    paddingVertical: 12,
    paddingLeft: 10,
    fontWeight: "normal",
    fontSize: 14,
    borderColor: "#DAEFFF",
    borderWidth: 2,
    borderRadius: 5,
  },
});
