import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { getExchangeList } from "../../api/axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ExchangeCard = ({ navigation, route }) => {
  const [coinData, setData] = useState([]);

  const fetchData = async () => {
    const data = await getExchangeList(5);
    // console.log(data);
    setData([...data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}
      >
        {coinData.map((props, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Coin", {
                  coinID: `${props.id}`,
                  coinName: `${props.name}`,
                });
              }}
              key={index}
            >
              <View style={styles.view}>
                <View>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri: props.image,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: "green",
                      fontSize: 14,
                      paddingHorizontal: 2,
                      // marginTop: 5,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="police-badge"
                      size={12}
                      color="green"
                    />
                    {props.trust_score}
                  </Text>
                </View>

                <View>
                  <Text style={styles.text}>
                    BTC {Number(props.trade_volume_24h_btc).toFixed(2)}
                  </Text>
                </View>

                {/* <View>
                <Text>
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
              </View> */}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    width: width / 2,
    margin: 10,
    height: 120,
    borderRadius: 10,
    padding: 10,
  },

  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default ExchangeCard;
