import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useTransactionStore } from "../../store/transactions";
import { styles } from "./styles";

const ExpensesPerDay = () => {
  const { balance, transactions } = useTransactionStore((store) => store);
  const [suggestedExpense, setSuggestedExpense] = useState<number>(0);
  const [todayExpense, setTodayExpense] = useState<number>(0);

  useEffect(() => {
    setSuggestedExpense(() => {
      const daysRemaining = calculateDaysRemaining();

      return balance / daysRemaining;
    });
    setTodayExpense(() => {
      const today = new Date();
      const todayTransactions = transactions.filter(
        (t) => new Date(t.date).getDate() === today.getDate()
      );
      console.log(today);
      console.log(todayTransactions);

      const todayTotal = todayTransactions.reduce((acc, t) => acc + t.value, 0);
      return todayTotal;
    });
  }, [balance, transactions]);

  const calculateDaysRemaining = () => {
    const hoje = new Date();
    const ultimoDiaDoMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
    const diasRestantes = ultimoDiaDoMes.getDate() - hoje.getDate();
    return diasRestantes;
  };

  return (
    <View>
      <Text style={styles.title}>Insights</Text>

      <View style={styles.insightsCards}>
        <View style={styles.card}>
          <Text style={styles.insightsText}>Gasto sugerido por dia:</Text>
          <Text style={styles.insightsText}>{suggestedExpense.toFixed(2)}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.insightsText}>Hoje você gastou:</Text>
          <Text style={styles.insightsText}>{todayExpense.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default ExpensesPerDay;
