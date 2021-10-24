import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { getCoinList } from "../api/axios";
import { Entypo } from "@expo/vector-icons";

const Item = ({ props, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Coin", {
          name: `${props.name}`,
          coinData: props,
        });
      }}
    >
      <View style={[styles.wrapper, styles.shadow]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              <Image
                style={{ width: 40, height: 40, marginRight: 10 }}
                source={{
                  // uri: `https://cryptoicons.org/api/color/${props.symbol.toLowerCase()}/200`,
                  // https://api.coinicons.net/icon/ada/64x64
                  uri: `http://api.coinicons.net/icon/${props.symbol.toLowerCase()}/64x64`,
                }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ textAlign: "left", marginVertical: 1 }}>
                {props.name}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 5,
                    marginEnd: 1,
                    backgroundColor: "#EFF2F5",
                    borderRadius: 50,
                    marginTop: 1,
                  }}
                >
                  {props.rank}
                </Text>
                <Text>({props.symbol})</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={{ textAlign: "right", marginVertical: 1 }}>
              ${Number(props.priceUsd).toFixed(2)}
            </Text>

            <Text>
              {Number(props.changePercent24Hr) > 0 ? (
                <Entypo name="triangle-up" size={22} color="green" />
              ) : (
                <Entypo name="triangle-down" size={22} color="red" />
              )}
              {Number(props.changePercent24Hr).toFixed(2)}%
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    // FIXME: Don't touch below code
  );
};
const ListHeader = () => {
  return <Text>Some famous coins</Text>;
};

const CryptoList = ({ navigation, route }) => {
  const [coinData, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getCoinList(50)
      .then((res) => {
        setTimeout(() => {
          setData(res);
          setLoader(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={80} color="teal" />
        </View>
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
    marginVertical: 5,
    marginHorizontal: 10,
  },
  shadow: {
    shadowColor: "#000",
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
  },
});

export default CryptoList;
