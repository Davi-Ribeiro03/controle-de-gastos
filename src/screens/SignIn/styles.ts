import { StyleSheet } from "react-native";
import { colors } from "../../Constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loginContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 30,
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#DAEFFF",
    width: "100%",
    height: 50,
    borderRadius: 4,
    paddingLeft: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.secondary,
    width: "80%",
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    borderRadius: 4,
  },
});
