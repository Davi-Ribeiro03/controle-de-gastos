import { View, Text } from "react-native";
import React from "react";
import Container from "./Container";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../../../Constants";

const Success = ({ message }: { message: string }) => {
  return (
    <Container>
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 20,
          paddingHorizontal: 40,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="check-circle" size={60} color={colors.secondary} />

        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "black",
          }}
        >
          {message}
        </Text>
      </View>
    </Container>
  );
};

export default Success;
