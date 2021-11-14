import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { getCoinList } from "../api/axios";
import Loader from "./Widgets/Loader";

import { commaSepertor } from "./Widgets/comma";

const Item = ({ props, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("Coin", {
          coinID: props.id,
          coinName: props.symbol.toUpperCase(),
          coinImg: props.image,
        });
      }}>
      <View style={styles.wrapper}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              <Image
                style={{ width: 45, height: 45, marginRight: 10 }}
                source={{
                  uri: props.image,
                }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{ textAlign: "left", marginVertical: 1, fontSize: 16 }}>
                {props.name}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}>
                <Text
                  style={{
                    paddingHorizontal: 5,
                    marginEnd: 1,
                    backgroundColor: "#EFF2F5",
                    borderRadius: 50,
                    marginTop: 1,
                  }}>
                  {props.market_cap_rank}
                </Text>
                <Text style={{ color: "grey" }}>
                  ({props.symbol.toUpperCase()})
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{ textAlign: "right", marginVertical: 1, fontSize: 16 }}>
              ${commaSepertor(Number(props.current_price).toFixed(2))}
            </Text>

            <Text style={{ textAlign: "right" }}>
              {Number(props.price_change_percentage_24h) > 0 ? (
                <Text style={{ color: "green" }}>
                  +
                  {commaSepertor(
                    Number(props.price_change_percentage_24h).toFixed(2)
                  )}
                  %
                </Text>
              ) : (
                <Text style={{ color: "red" }}>
                  {commaSepertor(
                    Number(props.price_change_percentage_24h).toFixed(2)
                  )}
                  %
                </Text>
              )}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// const FooterLoader = () => {
//   return <Text>Some famous coins</Text>;
// };

const CryptoList = ({ navigation, route }) => {
  const [coinData, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getCoinList("usd", 100)
      .then((data) => {
        setLoader(false);
        setData([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <Loader />
      ) : (
        <FlatList
          data={coinData}
          renderItem={({ item }) => (
            <Item props={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginVertical: 5,
  },
});

export default CryptoList;
