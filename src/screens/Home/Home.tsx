import { View } from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
// import SpendingChart from "../../components/SpendingChart/SpendingChart";
import LastTransactions from "../../components/LastTransactions/LastTransactions";
import { SafeAreaView } from "react-native-safe-area-context";
import MainContent from "../../components/MainContent/MainContent";
import { useTransactionStore } from "../../store/transactions";
import ExpensesPerDay from "../../components/ExpensesPerDay/ExpensesPerDay";

const Home = () => {
  const { findTransactions, transactions } = useTransactionStore();

  useEffect(() => {
    findTransactions();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <MainContent title="Últimas movimentações">
        <LastTransactions />
        <ExpensesPerDay />
      </MainContent>
    </SafeAreaView>
  );
};

export default Home;
