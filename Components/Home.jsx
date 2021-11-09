import React from "react";
import {
  StyleSheet,
  View,
  Linking,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import CoinCard from "./Widgets/CoinCard";
import ExchangeCard from "./Widgets/ExchangeCard";
import HighlightGrid from "./Widgets/HighlightGrid";

const FlatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.flatButtonStyle}>
        <Text style={styles.flatButtonStyleText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 10 }}>
          <HighlightGrid />
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
      </ScrollView>
    </SafeAreaView>
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
  flatButtonStyle: {
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 10,
    backgroundColor: "#242424",
    textAlign: "center",
  },
  flatButtonStyleText: {
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
