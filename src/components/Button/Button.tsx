import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

interface IButton {
  label: string;
  act?: () => void;
  color?: "green" | "red";
}

const Button = ({ label, act, color }: IButton) => {

  const resolveStyle = () => {
    if(color){
      return color === "green" ? styles.greenButton : styles.redButton
    }
    return styles.button
  }  

  return (
    <TouchableOpacity style={resolveStyle()} onPress={act}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
