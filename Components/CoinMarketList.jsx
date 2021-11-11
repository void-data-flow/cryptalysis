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

const Item = ({ props, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("Coin", {
          coinID: props.id,
          // coinName: props.name,
          coinName: props.symbol.toUpperCase(),
          coinImg: props.image
        });
      }}
    >
      <View style={styles.wrapper}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              <Image
                style={{ width: 40, height: 40, marginRight: 10 }}
                source={{
                  uri: props.image,
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
                  {props.market_cap_rank}
                </Text>
                <Text style={{color: "grey"}}>({props.symbol.toUpperCase()})</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={{ textAlign: "right", marginVertical: 1 }}>
              $ {Number(props.current_price).toFixed(2)}
            </Text>

            <Text style={{ textAlign: "right" }}>
              {Number(props.price_change_percentage_24h) > 0 ? (
                <Text style={{ color: "green" }}>
                  +{Number(props.price_change_percentage_24h).toFixed(2)}%
                </Text>
              ) : (
                <Text style={{ color: "red" }}>
                  {Number(props.price_change_percentage_24h).toFixed(2)}%
                </Text>
              )}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FooterLoader = () => {
  return <Text>Some famous coins</Text>;
};

const CryptoList = ({ navigation, route }) => {
  const [coinData, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    const data = await getCoinList("usd", 50);
    // console.log(data);
    setData([...data]);
  };

  useEffect(() => {
    fetchData();

    setLoader(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={60} color="teal" />
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
  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginVertical: 5,
  },
});

export default CryptoList;
