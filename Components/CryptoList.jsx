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

const Item = ({ props }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{props.name}</Text>
    <Text style={styles.title}>{props.num_market_pairs}</Text>
    <Text style={styles.title}>{props.symbol}</Text>
    <Text style={styles.title}>{props.citculating_supply}</Text>{" "}
    <Text style={styles.title}>{props.cmc_rank}</Text>
    <Text style={styles.title}>{props.total_supply}</Text>
    <Text style={styles.title}>{props.quote.USD.price}</Text>
  </View>
);

const CryptoList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item props={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
  // const [coinData,setData] = useState([]);
  // useEffect(()=>{
  //     getCoinList().then(res=>{
  //         setData(res.data.data);
  //     }).catch(err=>{
  //         console.log(err);
  //     })
  // },[])
  // return (
  //     <SafeAreaView style={styles.container}>
  //         <FlatList
  //             data={coinData}
  //             renderItem={({ item }) => <Item title={item.name} />}
  //             keyExtractor={item => item.id}
  //         />
  //     </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-around",
  },
});

export default CryptoList;
