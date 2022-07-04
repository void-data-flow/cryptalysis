import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import CoinCard from "./Widgets/CoinCard";
import ExchangeCard from "./Widgets/ExchangeCard";
import HighlightGrid from "./Widgets/HighlightGrid";
import StatusCard from "./Widgets/StatusCard";

const Home = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Grid card block */}
        <View style={styles.blockMargin}>
          <HighlightGrid />
        </View>

        {/* Top Coins block */}
        <View style={styles.blockMargin}>
          <View style={styles.subHeader}>
            <Text style={[styles.staticText, { fontWeight: "bold" }]}>
              Top Coins
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("CoinMarketList")}>
              <Text style={styles.staticText}>See All</Text>
            </TouchableOpacity>
          </View>
          <CoinCard navigation={navigation} route={route} />
        </View>

        {/* Exchange list block */}
        <View style={styles.blockMargin}>
          <View style={styles.subHeader}>
            <Text style={[styles.staticText, { fontWeight: "bold" }]}>
              Exchange List
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("ExchangeList")}>
              <Text style={styles.staticText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ExchangeCard navigation={navigation} route={route} />
        </View>

        {/* Event updates block */}
        {/* <View style={styles.blockMargin}>
          <View style={styles.subHeader}>
            <Text style={[styles.staticText, { fontWeight: "bold" }]}>
              Event Updates
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("EventUpdates")}>
              <Text style={styles.staticText}>See All</Text>
            </TouchableOpacity>
          </View>
          <StatusCard navigation={navigation} route={route} />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  blockMargin: {
    marginVertical: 10,
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  staticText: {
    fontSize: 16,
  },
});

export default Home;
