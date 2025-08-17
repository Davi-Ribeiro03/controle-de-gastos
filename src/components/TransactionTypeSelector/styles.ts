import { StyleSheet } from "react-native";
import { colors } from "../../Constants";

const commonTransactionTypeStyles = {
  width: 174,
  textAlign: "center",
  paddingVertical: 14,
  fontWeight: "bold",
  fontSize: 16,
  borderRadius: 6,
}

export const styles = StyleSheet.create({
  transactionTypeSelector: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    marginVertical: 20,
    borderColor: "#DAEFFF",
    borderWidth:2,
    borderRadius: 6,
    width: 352
  },
  transactionType: {
    ...commonTransactionTypeStyles
  },
  entrySelected: {
    color: colors.white,
    backgroundColor: "#0CFF4D",
    ...commonTransactionTypeStyles
  },
  expenseSelected: {
    color: colors.white,
    backgroundColor: "#E50815",
    ...commonTransactionTypeStyles
  },
});
