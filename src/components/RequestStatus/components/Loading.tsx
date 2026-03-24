import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import Container from "./Container";

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size={"large"} color={"blue"} />
    </Container>
  );
};

export default Loading;
