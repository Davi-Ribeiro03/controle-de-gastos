import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";
import { ITransaction } from "../../../interfaces/ITransactions";
import { formatNumberIntoValue } from "../../../Services/formatNumberIntoValue";

export const renderTransactions = ({ item }: { item: ITransaction }) => (
  <View style={styles.container}>
    <View style={styles.description}>
      <View style={styles.titleAndcategory}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category || "Sem categoria"}</Text>
      </View>
      <View style={styles.dateAndvalue}>
        <Text style={styles.date}>{item.date}</Text>
        <Text
          style={
            item.type === "entry" ? styles.entryValue : styles.expenseValue
          }
        >
          {formatNumberIntoValue(item.value)}
        </Text>
      </View>
    </View>
    <View style={styles.divisionLine} />
  </View>
);
