import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Home from "./Components/Home";
import CoinMarketList from "./Components/CoinMarketList";
import ExchangeList from "./Components/ExchangeList";
import Coin from "./Components/Coin";
import Browser from "./Components/Browser";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeNav = createNativeStackNavigator();
const CoinNav = createNativeStackNavigator();
const ExNav = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

/*
black: 242424

blue: 246EE9

red: FF2400

green: 3EB489

*/

function HomeStackScreen() {
  return (
    <HomeNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#242424",
        },
        headerTintColor: "#fff",
      }}>
      <HomeNav.Screen
        name="Home"
        component={Home}
        options={{
          title: "Cryptalysis",
          // headerShown: false,
        }}
      />
      <HomeNav.Screen
        name="CoinMarketList"
        component={CoinMarketList}
        options={{
          title: "Coin Market",
          // headerShown: false,
        }}
      />
      <HomeNav.Screen
        name="ExchangeList"
        component={ExchangeList}
        options={{
          title: "Exchange",
          // headerShown: false,
        }}
      />
      <HomeNav.Screen
        name="Coin"
        component={Coin}
        options={({ route }) => ({
          title: route.params.coinName,
        })}
      />
      <HomeNav.Screen
        name="Browser"
        component={Browser}
        options={({ route }) => ({
          headerTitle: route.params.exchangeName,
        })}
      />
    </HomeNav.Navigator>
  );
}

function CoinStackScreen() {
  return (
    <CoinNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#242424",
        },
        headerTintColor: "#fff",
      }}>
      <HomeNav.Screen
        name="CoinMarketList"
        component={CoinMarketList}
        options={{
          title: "Coin Market",
          // headerShown: false,
        }}
      />
      <HomeNav.Screen
        name="Coin"
        component={Coin}
        options={({ route }) => ({
          title: route.params.coinName,
        })}
      />
    </CoinNav.Navigator>
  );
}
function ExchangeStackScreen() {
  return (
    <ExNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#242424",
        },
        headerTintColor: "#fff",
      }}>
      <HomeNav.Screen
        name="ExchangeList"
        component={ExchangeList}
        options={{
          title: "Exchange",
          // headerShown: false,
        }}
      />
      <HomeNav.Screen
        name="Browser"
        component={Browser}
        options={({ route }) => ({
          headerTitle: route.params.exchangeName,
        })}
      />
    </ExNav.Navigator>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      {/* <NavigationContainer>
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
          <Stack.Screen
            name="Browser"
            component={Browser}
            options={({ route }) => ({
              headerTitle: route.params.exchangeName,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer> */}

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="grey"
          barStyle={{ backgroundColor: "#242424" }}>
          <Tab.Screen
            name="Home Stack"
            component={HomeStackScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Coin Market Stack"
            component={CoinStackScreen}
            options={{
              tabBarLabel: "Coins",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="bitcoin"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Exchange Stack"
            component={ExchangeStackScreen}
            options={{
              tabBarLabel: "Exchange",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="chart-bar-stacked"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
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
