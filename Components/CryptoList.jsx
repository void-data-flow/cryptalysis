import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { getCoinList } from "../api/axios";

const DATA = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    num_market_pairs: 8416,
    max_supply: 21000000,
    circulating_supply: 18843318,
    total_supply: 18843318,
    cmc_rank: 1,
    quote: {
      USD: {
        price: 57677.344625611775,
        volume_24h: 42164861416.91325,
        volume_change_24h: 4.44,
        percent_change_1h: -0.45691103,
        percent_change_24h: 5.19562891,
        percent_change_7d: 5.31575259,
        market_cap: 1086832546175.9937,
      },
    },
  },
];

const Item = ({ props }) => {
  return (
    <View style={[styles.item, styles.shadow]}>
      <View style={styles.rowTop}>
        <Text>{props.name}</Text>
        <Text>{Number(props.changePercent24Hr).toFixed(2)}%</Text>
        <Text>${Number(props.priceUsd).toFixed(2)}</Text>
      </View>
      <View style={styles.rowBottom}>
        <Text>{props.rank}</Text>
        <Text>{props.symbol}</Text>
      </View>
    </View>
  );
};
const ListHeader = () => {
  return <Text>Some famous coins</Text>;
};

const CryptoList = () => {
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <FlatList
  //       data={DATA}
  //       renderItem={({ item }) => <Item props={item} />}
  //       keyExtractor={(item) => item.id}
  //       ListHeaderComponent={ListHeader}
  //     />
  //   </SafeAreaView>
  // );
  const [coinData, setData] = useState([]);
  useEffect(() => {
    getCoinList()
      .then((res) => {
        setData(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={coinData}
        renderItem={({ item }) => <Item props={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
  },
  shadow: {
    // borderWidth: 1,
    // shadowColor: "#000",
    // shadowRadius: 5,
    // shadowOpacity: 0.3,
    // elevation: 5,

    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 1,
    shadowColor: "#000",
  },
  item: {
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
  },
  rowTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 16,
  },
  rowBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontSize: 16,
  },
});

export default CryptoList;
