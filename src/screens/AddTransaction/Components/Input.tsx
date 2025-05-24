import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import React from "react";
import { styles } from "../styles";
import MaskInput, { Mask } from "react-native-mask-input";

interface InputProps {
  label: string;
  keyBoardType?: KeyboardTypeOptions;
  act: React.Dispatch<React.SetStateAction<string>>;
  mask?: Mask;
  value: string;
}

const Input = ({ label, keyBoardType, act, mask, value }: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{label}:</Text>
      <MaskInput
        style={styles.inputValue}
        keyboardType={keyBoardType || "default"}
        onChangeText={(masked) => {
          return act(masked);
        }}
        mask={mask}
        value={value}
      />
      {/* <TextInput
        style
        keyboardType={keyBoardType || "default"}
        onChangeText={(text) => act(text)}
      /> */}
    </View>
  );
};

export default Input;
