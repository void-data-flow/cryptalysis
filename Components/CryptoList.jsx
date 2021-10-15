import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
// import { getCoinList } from "../api/axios";

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
    <View style={styles.item}>
      <View style={styles.rowTop}>
        <Text>{props.name}</Text>
        <Text>{props.num_market_pairs}</Text>
        <Text>{props.quote.USD.price.toFixed(2)}</Text>
      </View>
      <View style={styles.rowBottom}>
        <Text>{props.cmc_rank}</Text>
        <Text>{props.symbol}</Text>
      </View>
    </View>
  );
};
const ListHeader = () => {
  return <Text>Some famous coins</Text>;
};

const CryptoList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item props={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
      />
    </SafeAreaView>
  );
  // const [coinData, setData] = useState([]);
  // useEffect(() => {
  //   getCoinList()
  //     .then((res) => {
  //       setData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <FlatList
  //       data={coinData}
  //       renderItem={({ item }) => <Item title={item.name} />}
  //       keyExtractor={(item) => item.id}
  //       ListHeaderComponent={ListHeader}
  //     />
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 8,
    padding: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default CryptoList;
