import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { getCoinList } from "../../api/axios";
const { width } = Dimensions.get("window");

const CoinCard = ({ navigation, route }) => {
  const [coinData, setData] = useState([]);

  const fetchData = async () => {
    const data = await getCoinList("usd", 5);
    // console.log(data);
    setData([...data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentInset={{
        top: 0,
        left: 30,
        bottom: 0,
        right: 30,
      }}>
      {coinData.map((props, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("Coin", {
                coinID: props.id,
                coinName: props.symbol.toUpperCase(),
              });
            }}
            key={index}>
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
                <Text style={styles.text}>
                  {props.name} ({props.symbol.toUpperCase()})
                </Text>
              </View>

              <View>
                <Text style={styles.text}>
                  $ {Number(props.current_price).toFixed(2)}
                </Text>
              </View>

              <View>
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
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    width: width / 2,
    margin: 5,
    height: 160,
    borderRadius: 8,
    padding: 15,
  },

  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default CoinCard;
