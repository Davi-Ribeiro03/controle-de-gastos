import { FlatList, Pressable, Text, View } from "react-native";
import React from "react";
import { ITransaction } from "../../interfaces/ITransactions";
import { renderTransactions } from "./components/RenderTransaction";
import { styles } from "./styles";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";

const Transactions = ({ transactions }: { transactions: ITransaction[] }) => {
  const navigation = useNavigation();

  if (transactions.length < 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.noTransactionsText}>
          Não há movimentações para exibir
        </Text>
        <Button
          label="Adicionar transação"
          act={() => navigation.navigate("AddTransaction")}
        />
      </View>
    );
  }

  const removeTransaction = () => {
    alert('Deseja remover essa transação?')
  }

  return (
    <FlatList
      data={transactions}
      renderItem={({item}) => renderTransactions(item, removeTransaction)}
      initialNumToRender={3}
    />
  );
};

export default Transactions;
