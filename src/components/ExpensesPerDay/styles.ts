import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginVertical: 20,
  },
  insightsCards: {
    width: "100%",
    height: 100,
    gap: 10,
  },
  card: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 60,
    marginRight: 20,
    gap: 10,
    backgroundColor: "#0166CE",
    borderRadius: 10,
  },
  insightsText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
