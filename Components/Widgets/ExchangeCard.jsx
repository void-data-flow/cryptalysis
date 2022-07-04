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
import { getExchangeList } from "../../api/axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Loader from "./Loader";
import { commaSepertor } from "./comma";

const { width } = Dimensions.get("window");

const ExchangeCard = ({ navigation, route }) => {
  const [coinData, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getExchangeList(5)
      .then((data) => {
        setLoader(false);
        setData([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loader ? (
    <Loader />
  ) : (
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
            onPress={() =>
              navigation.navigate("Browser", {
                exchangeName: props.name,
                url: props.url,
              })
            }
            key={index}>
            <View style={styles.view}>
              <View style={styles.flexProp}>
                <View>
                  <Image
                    style={{ width: 45, height: 45 }}
                    source={{
                      uri: props.image,
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.trustIcon}>
                    <MaterialCommunityIcons
                      name="police-badge"
                      size={15}
                      color="green"
                    />
                    {props.trust_score}
                  </Text>
                  <Text style={styles.text}>
                    BTC{" "}
                    {commaSepertor(
                      Number(props.trade_volume_24h_btc).toFixed(2)
                    )}
                  </Text>
                </View>
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
    borderRadius: 8,
    padding: 15,
  },
  flexProp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trustIcon: {
    color: "green",
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
  },
});

export default ExchangeCard;
