import { StyleSheet } from "react-native";
import { colors } from "../../Constants";

export const styles = StyleSheet.create({
  transactionTypeSelector: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    gap: 20,
  },
  transactionType: {
    backgroundColor: "#DAEFFF",
    width: 160,
    textAlign: "center",
    paddingVertical: 14,
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 6,
  },
  transactionTypeSelected: {
    backgroundColor: "#DAEFFF",
    width: 160,
    textAlign: "center",
    paddingVertical: 14,
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.primary,
  },
});
