import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import { styles } from "./styles";

interface CommonInputProps extends TextInputProps {}

const CommonInput = (props: CommonInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

export default CommonInput;
