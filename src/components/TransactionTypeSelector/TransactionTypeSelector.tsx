import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import { TransactionType } from "../../interfaces/ITransactions";

interface ITransactionTypeSelector {
  type: TransactionType;
  setType: React.Dispatch<React.SetStateAction<TransactionType>>;
}

const TransactionTypeSelector = ({
  type,
  setType,
}: ITransactionTypeSelector) => {
  return (
    <View style={styles.transactionTypeSelector}>
      <Pressable onPress={() => setType("entry")}>
        <Text
          style={
            type === "entry"
              ? styles.transactionTypeSelected
              : styles.transactionType
          }
        >
          Entrada
        </Text>
      </Pressable>

      <Pressable onPress={() => setType("expense")}>
        <Text
          style={
            type === "expense"
              ? styles.transactionTypeSelected
              : styles.transactionType
          }
        >
          Despesa
        </Text>
      </Pressable>
    </View>
  );
};

export default TransactionTypeSelector;
