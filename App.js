import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./Components/Widgets/Header";
import Home from "./Components/Home";
import Crypto from "./Components/Crypto";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Coin from "./Components/Coin";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Cryptalysis",
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="Main"
            component={Crypto}
            options={{
              title: "Coin Market",
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="Coin"
            component={Coin}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navigationContainer: {
    backgroundColor: "teal",
  },
});
