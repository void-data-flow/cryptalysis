import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";

const Coin = ({ route, navigation }) => {
  const { coinData } = route.params;
  return (
    <View style={styles.container}>
      <Text>{coinData.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default Coin;
