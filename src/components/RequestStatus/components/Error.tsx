import { View, Text } from "react-native";
import React from "react";
import Container from "./Container";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Error = ({ message }: { message: string }) => {
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
        <FontAwesome name="exclamation-circle" size={40} color="red" />

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

export default Error;
