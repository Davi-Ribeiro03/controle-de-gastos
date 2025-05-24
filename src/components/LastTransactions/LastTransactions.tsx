import React from "react";
import { View, Text, Pressable } from "react-native";
import Transactions from "../Transactions/Transactions";
import { styles } from "./styles";
import { useTransactionStore } from "../../store/transactions";
import { useNavigation } from "@react-navigation/native";

const LastTransactions = () => {
  const navigation = useNavigation();
  const { transactions } = useTransactionStore();

  return (
    <View style={styles.container}>
      <Transactions transactions={transactions.slice(-3)} />

      {transactions.length >= 1 && (
        <Pressable onPress={() => navigation.navigate("AllTransactions")}>
          <Text style={styles.seeFullExtract}>Ver extrato completo {">"}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default LastTransactions;
