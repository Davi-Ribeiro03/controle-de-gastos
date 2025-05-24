import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const Background = () => {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={require("../../../assets/background.jpg")}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        style={styles.gradient}
      />
    </ImageBackground>
  );
};

export default Background;
