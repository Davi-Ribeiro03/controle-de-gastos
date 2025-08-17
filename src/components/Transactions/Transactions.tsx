import { Alert, FlatList, Pressable, Text, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { ITransaction } from "../../interfaces/ITransactions";
import { renderTransactions } from "./components/RenderTransaction";
import { styles } from "./styles";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useTransactionStore } from "../../store/transactions";

const Transactions = ({ transactions }: { transactions: ITransaction[] }) => {
  const navigation = useNavigation();
  const removeTransaction = useTransactionStore((store) => store.removeTransaction);

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

  const handleRemoveTransaction = (item:ITransaction) => {
    Alert.alert(
      'Remover transação',
      'Você deseja remover esta transação?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Remover', onPress: () => removeTransaction(item.id) },
      ]
    )
  }

  return (
    <FlatList
      data={transactions}
      renderItem={({item}) => {
        return <TouchableWithoutFeedback onLongPress={() => handleRemoveTransaction(item)}>
          {renderTransactions({item})}
        </TouchableWithoutFeedback>
        }
      }
      initialNumToRender={3}
    />
  )
}

export default Transactions;
