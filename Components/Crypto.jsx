import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Flatlist,
  SafeAreaView,
  ScrollView,
} from "react-native";
import CryptoList from "./CryptoList";

const MainScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >

        <CryptoList navigation={navigation} route={route} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default MainScreen;
