import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Home from "./Components/Home";
import CoinMarketList from "./Components/CoinMarketList";
import ExchangeList from "./Components/ExchangeList";
import Coin from "./Components/Coin";
import Browser from "./Components/Browser";
import About from "./Components/Aboutus";
import Events from "./Components/EventPage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeNav = createNativeStackNavigator();
const CoinNav = createNativeStackNavigator();
const ExNav = createNativeStackNavigator();
const EventsNav = createNativeStackNavigator();
const AboutNav = createNativeStackNavigator();
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
      <HomeNav.Screen
        name="EventUpdates"
        component={Events}
        // options={({ route }) => ({
        //   headerTitle: "Event Updates",
        // })}
        options={{
          title: "Event Updates",
        }}
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
      <CoinNav.Screen
        name="CoinMarketList"
        component={CoinMarketList}
        options={{
          title: "Coin Market",
          // headerShown: false,
        }}
      />
      <CoinNav.Screen
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
      <ExNav.Screen
        name="ExchangeList"
        component={ExchangeList}
        options={{
          title: "Exchange",
          // headerShown: false,
        }}
      />
      <ExNav.Screen
        name="Browser"
        component={Browser}
        options={({ route }) => ({
          headerTitle: route.params.exchangeName,
        })}
      />
    </ExNav.Navigator>
  );
}

function EventsStackScreen() {
  return (
    <EventsNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#242424",
        },
        headerTintColor: "#fff",
      }}>
      <EventsNav.Screen
        name="Events"
        component={Events}
        options={{
          title: "Event Updates",
          // headerShown: false,
        }}
      />
    </EventsNav.Navigator>
  );
}

function AboutStackScreen() {
  return (
    <AboutNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#242424",
        },
        headerTintColor: "#fff",
      }}>
      <AboutNav.Screen
        name="About"
        component={About}
        options={{
          title: "About us",
          // headerShown: false,
        }}
      />
    </AboutNav.Navigator>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="grey"
          labeled={false}
          barStyle={{ backgroundColor: "#242424", paddingVertical: 2 }}>
          <Tab.Screen
            name="Home Stack"
            component={HomeStackScreen}
            options={{
              // tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Coin Market Stack"
            component={CoinStackScreen}
            options={{
              // tabBarLabel: "Coins",
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
              // tabBarLabel: "Exchange",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="chart-bar-stacked"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Event Status"
            component={EventsStackScreen}
            options={{
              // tabBarLabel: "Events",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="update" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="About us"
            component={AboutStackScreen}
            options={{
              // tabBarLabel: "About us",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="information-outline"
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
});
