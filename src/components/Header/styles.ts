import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  balanceContainer: {
    flexDirection: "row",
    gap: 40,
  },
  balance: {
    padding: 20,
    width: 240,
    height: 100,
    marginRight: 20,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  balanceText: {
    color: "#fff",
    fontSize: 20,
  },
  balanceValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
