import { StyleSheet } from "react-native";
import { colors } from "../../Constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
  },
  noTransactionsText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleAndcategory: {
    flexDirection: "column",
  },
  dateAndvalue: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  category: {
    fontSize: 12,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expenseValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  entryValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
  divisionLine: {
    backgroundColor: "#DAEFFF",
    height: 2,
    width: "100%",
    marginTop: 2,
    marginBottom: 10,
  },
});
