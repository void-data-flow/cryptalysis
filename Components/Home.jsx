import React from "react";
import {
  StyleSheet,
  View,
  Linking,
  Text,
  TouchableOpacity,
} from "react-native";
import FlatButton from "./Shared/button";
import CoinCard from "./Widgets/CoinCard";
import ExchangeCard from "./Widgets/ExchangeCard";

const openWebsite = () => {
  Linking.openURL("https://manavrachna.edu.in/");
};

const Home = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.btnSpacer}>
          <FlatButton text="University" onPress={openWebsite} />
        </View>
        <View style={styles.btnSpacer}>
          <FlatButton
            text="Coin Market"
            onPress={() => navigation.navigate("CoinMarketList")}
          />
        </View>
        <View style={styles.btnSpacer}>
          <FlatButton
            text="Exchange"
            onPress={() => navigation.navigate("ExchangeList")}
          />
        </View>

        <View>
          <View style={styles.subHeader}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Top Coins</Text>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("CoinMarketList")}
              >
                <Text>See All</Text>
              </TouchableOpacity>
            </View>
          </View>
          <CoinCard navigation={navigation} route={route} />
        </View>

        <View>
          <View style={styles.subHeader}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Exchange List
            </Text>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("ExchangeList")}
              >
                <Text>See All</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ExchangeCard navigation={navigation} route={route} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  btn: {
    borderRadius: 8,
    paddingVertical: 12,
    textAlign: "center",
  },
  btnSpacer: {
    marginVertical: 16,
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default Home;
