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
import { getExchangeList } from "../api/axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Loader from "./Widgets/Loader";

const Item = ({ props, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate("Browser", {
          exchangeName: props.name,
          url: props.url,
        })
      }>
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
                }}>
                <Text
                  style={{
                    paddingHorizontal: 5,
                    marginEnd: 1,
                    backgroundColor: "#EFF2F5",
                    borderRadius: 50,
                    marginTop: 1,
                  }}>
                  {props.trust_score_rank}
                </Text>
                <Text
                  style={{
                    color: "green",
                    fontSize: 14,
                    paddingHorizontal: 2,
                    // marginTop: 5,
                  }}>
                  <MaterialCommunityIcons
                    name="police-badge"
                    size={12}
                    color="green"
                  />
                  {props.trust_score}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={{ textAlign: "right", marginVertical: 1 }}>
              BTC {Number(props.trade_volume_24h_btc).toFixed(2)}
            </Text>

            {/* <Text style={{ textAlign: "right" }}>
              {Number(props.price_change_percentage_24h) > 0 ? (
                <Text style={{ color: "green" }}>
                  +{Number(props.price_change_percentage_24h).toFixed(2)}%
                </Text>
              ) : (
                <Text style={{ color: "red" }}>
                  {Number(props.price_change_percentage_24h).toFixed(2)}%
                </Text>
              )}
            </Text> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
    // FIXME: Don't touch below code
  );
};

const CryptoList = ({ navigation, route }) => {
  const [coinData, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getExchangeList(50)
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
