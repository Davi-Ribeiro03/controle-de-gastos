import { View, Text } from "react-native";
import React from "react";
import { styles } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { formatNumberIntoValue } from "../../../Services/formatNumberIntoValue";

type BalanceProps = {
  title: string;
  value: number;
};

const Balance = ({ title, value }: BalanceProps) => {
  return (
    <View style={styles.balance}>
      <LinearGradient
        colors={["#006DDA", "#005EBD", "#0055A9", "#004992", "#003A74"]}
        style={styles.gradient}
        locations={[0, 0.3, 0.5, 0.7, 1]}
      />
      <Text style={styles.balanceText}>{title}</Text>
      <Text style={styles.balanceValue}>{formatNumberIntoValue(value)}</Text>
    </View>
  );
};

export default Balance;
