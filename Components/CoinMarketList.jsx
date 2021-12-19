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
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate("Coin", {
          coinID: props.id,
          coinName: `${props.name} (${props.symbol.toUpperCase()})`,
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
                style={{ textAlign: "left", marginVertical: 1, fontSize: 14 }}>
                {props.name}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    padding: 2,
                    marginEnd: 1,
                    backgroundColor: "#EFF2F5",
                    borderRadius: 50,
                    marginTop: 1,
                  }}>
                  {props.market_cap_rank}
                </Text>
                <Text style={{ color: "grey", fontSize: 14 }}>
                  ({props.symbol.toUpperCase()})
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{ textAlign: "right", marginVertical: 1, fontSize: 14 }}>
              $ {commaSepertor(Number(props.current_price).toFixed(2))}
            </Text>

            <Text style={{ textAlign: "right" }}>
              {Number(props.price_change_percentage_24h) > 0 ? (
                <Text style={{ color: "#1DCD92" }}>
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
    getCoinList("usd", 200)
      .then((data) => {
        setLoader(false);
        setData([...data]);
      })
      .catch((err) => {
        console.log(err.message);
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
          ListFooterComponent={Loader}
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
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 5,
  },
});

export default CryptoList;
