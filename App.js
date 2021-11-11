import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Home from "./Components/Home";
import CoinMarketList from "./Components/CoinMarketList";
import ExchangeList from "./Components/ExchangeList";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Coin from "./Components/Coin";

const Stack = createNativeStackNavigator();

/*
black: 242424

blue: 246EE9

red: FF2400

green: 3EB489

*/

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#246EE9",
            },
            headerTintColor: "#fff",
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Cryptalysis",
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="CoinMarketList"
            component={CoinMarketList}
            options={{
              title: "Coin Market",
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="ExchangeList"
            component={ExchangeList}
            options={{
              title: "Exchange",
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="Coin"
            component={Coin}
            options={({ route }) => ({
              title: route.params.coinName,
            })}
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
