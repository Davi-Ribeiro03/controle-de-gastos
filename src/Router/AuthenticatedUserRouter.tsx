import React from "react";
import Home from "../screens/Home/Home";
import AddTransaction from "../screens/AddTransaction/AddTransaction";
import AllTransactions from "../screens/AllTransactions/AllTransactions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Easing } from "react-native";

const Tab = createBottomTabNavigator();

export default function AuthenticatedUserRouter() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="AddTransaction"
        component={AddTransaction}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="plus-square" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="AllTransactions"
        component={AllTransactions}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="list-alt" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
