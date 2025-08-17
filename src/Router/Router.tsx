import React from "react";
import LoginRouter from "./LoginRouter";
import AuthenticatedUserRouter from "./AuthenticatedUserRouter";
import { NavigationContainer } from "@react-navigation/native";
import { useUserStore } from "../store/user";
import { StatusBar } from "react-native";
import { colors } from "../Constants";

export default function Router() {
  const findUser = useUserStore((state) => state.findUser);
  const user = findUser()


  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      {!!user ? <AuthenticatedUserRouter /> : <LoginRouter />}
    </NavigationContainer>
  );
}
