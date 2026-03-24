import { View, Text } from "react-native";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 999,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
