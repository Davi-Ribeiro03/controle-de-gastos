import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "./Components/Input";
import MainContent from "../../components/MainContent/MainContent";
import TransactionTypeSelector from "../../components/TransactionTypeSelector/TransactionTypeSelector";
import Button from "../../components/Button/Button";
import { ITransaction, TransactionType } from "../../interfaces/ITransactions";
import { randomUUID } from "expo-crypto";
import { useTransactionStore } from "../../store/transactions";
import { Masks } from "react-native-mask-input";

const AddTransaction = () => {
  const [type, setType] = useState<TransactionType>("entry");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const addTransaction = useTransactionStore((state) => state.addTransaction);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const clearFields = () => {
    setTitle("");
    setValue("");
    setCategory("");
    setDescription("");
    setDate("");
  };

  function formatCurrency(value: string) {
    return parseFloat(
      value.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
    );
  }

  const handleAddTransaction = () => {
    if (title === "" || value === "" || date === "") {
      alert("Você deve preencher o título, valor e data ");
      return;
    }

    const transaction: ITransaction = {
      id: randomUUID(),
      category,
      title,
      type,
      value: formatCurrency(value),
      date,
    };

    addTransaction(transaction);
    clearFields();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        {!isKeyboardVisible && <Header />}

        <MainContent title="Adicionar Receitas/Despesas">
          <TransactionTypeSelector type={type} setType={setType} />

          <Input label="Título" act={setTitle} value={title} />
          <Input
            label="Valor"
            keyBoardType="numeric"
            act={setValue}
            mask={Masks.BRL_CURRENCY}
            value={value}
          />
          {/* {type === "expense" && (
            <Input label="Categoria" act={setCategory} value={category} />
          )} */}
          <Input label="Descrição" act={setDescription} value={description} />
          <Input
            label="Data"
            act={setDate}
            value={date}
            mask={Masks.DATE_DDMMYYYY}
          />

          <Button label="Adicionar" act={handleAddTransaction} />
        </MainContent>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddTransaction;
