import { StyleSheet } from "react-native";
import { colors } from "../../Constants";

const commonButtonStyles = {
  marginHorizontal: "auto",
  paddingVertical: 20,
  borderRadius: 10,
  marginVertical: 20,
}

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    width: 240,
    ...commonButtonStyles
  },
  greenButton:{
    backgroundColor: "#0CFF4D",
    width: "100%",
    ...commonButtonStyles
  },
  redButton:{
    backgroundColor: "#E50815",
    width: "100%",
    ...commonButtonStyles
  },  
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
