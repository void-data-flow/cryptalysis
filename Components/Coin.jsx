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
    <View>
      <Text>{coinData.name}</Text>
    </View>
  );
};

export default Coin;
