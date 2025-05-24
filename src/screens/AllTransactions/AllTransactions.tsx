import { View, Text, FlatList, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import TransactionTypeSelector from "../../components/TransactionTypeSelector/TransactionTypeSelector";
import Transactions from "../../components/Transactions/Transactions";
import Button from "../../components/Button/Button";
import { useTransactionStore } from "../../store/transactions";
import { TransactionType } from "../../interfaces/ITransactions";

const AllTransactions = () => {
  const [type, setType] = useState<TransactionType>("entry");
  const { transactions, removeAllTransactions } = useTransactionStore(
    (store) => store
  );
  const transactionsIsEmpty = transactions.length === 0;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MainContent title="Todas as movimentações">
        <TransactionTypeSelector type={type} setType={setType} />

        <Transactions transactions={transactions.reverse()} />

        {!transactionsIsEmpty && (
          <Button label="Remover tudo" act={removeAllTransactions} />
        )}
      </MainContent>
    </SafeAreaView>
  );
};

export default AllTransactions;
