import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

interface IButton {
  label: string;
  act?: () => void;
}

const Button = ({ label, act }: IButton) => {
  return (
    <TouchableOpacity style={styles.button} onPress={act}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
