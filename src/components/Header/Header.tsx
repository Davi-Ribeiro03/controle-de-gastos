import { View, Text, ScrollView, Keyboard, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import Balance from "./components/Balance";
import { useUserStore } from "../../store/user";
import { useTransactionStore } from "../../store/transactions";
import { TransactionType } from "../../interfaces/ITransactions";

const Header = () => {
  const { userAuth, logout } = useUserStore((store) => store);
  const { totalEntry, totalExpenses, balance } = useTransactionStore(
    (store) => store
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoutButton}>
        <Text style={styles.headerTitle}>
          Bem vindo{"(a)"} {userAuth?.name.split(" ")[0]}!
        </Text>

        <Pressable onPress={logout}>
          <Text
            style={{
              marginLeft: -60,
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
          >
            Sair
          </Text>
        </Pressable>
      </View>

      <ScrollView style={styles.balanceContainer} horizontal>
        <Balance title="Saldo em conta" value={balance} />
        <Balance title="Total de entradas" value={totalEntry} />
        <Balance title="Total de gastos" value={totalExpenses} />
      </ScrollView>
    </View>
  );
};

export default Header;
