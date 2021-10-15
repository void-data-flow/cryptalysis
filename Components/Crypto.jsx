import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Flatlist,
  SafeAreaView,
  ScrollView,
} from "react-native";
import CryptoList from "./CryptoList";

// FIXME: custom header import. Don't Touch
// import Header from "./Widgets/Header";

const MainScreen = ({ navigation, route }) => {
  return (
    <React.Fragment>
      {/* FIXME: custom header component call. Don't Touch */}
      {/* <Header backArrow={false} title={"Crypto Coins"} /> */}

      <SafeAreaView style={styles.container}>
        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        > */}
        <CryptoList navigation={navigation} route={route} />
        {/* </ScrollView> */}
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default MainScreen;
