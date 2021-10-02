import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./Components/Widgets/Header";
import Home from "./Components/Home";
import MainScreen from "./Components/MainScreen";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.container}>
        <Home />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingStart: 20,
    paddingEnd: 20,
  },
});
