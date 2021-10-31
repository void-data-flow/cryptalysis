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
import { getCoinList } from "../api/axios";
import { AntDesign } from "@expo/vector-icons";
const Coin = ({ route, navigation }) => {
  const { coinID } = route.params;

  console.log(coinID);
  return (
    <View>
      <Text>{coinID}</Text>
      {/* <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Image
            style={{ width: 40, height: 40, marginRight: 10 }}
            source={{
              // uri: `https://cryptoicons.org/api/color/${props.symbol.toLowerCase()}/200`,
              // https://api.coinicons.net/icon/ada/64x64
              uri: `http://api.coinicons.net/icon/${coinData.symbol.toLowerCase()}/64x64`,
            }}
          />
        </View>
        <Text>{coinData.symbol}</Text>
        <Text>{coinData.rank}</Text>
      </View> */}
      {/* <View style={{ flexDirection: "row" }}>
        <Text>{coinData.name}</Text>
      </View> */}
      {/* <View style={{ flexDirection: "row" }}>
        <View>
          <Text>{coinData.priceUsd}</Text>
        </View>
      </View> */}
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
