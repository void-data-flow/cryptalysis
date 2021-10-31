import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { getSingleCoinInfo } from "../api/axios";

const Coin = ({ route, navigation }) => {
  const { coinID, coinName } = route.params;
  const coinIDLowerCase = coinID.toLowerCase();

  const [singleCoinDetails, setSingleCoinDetails] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getSingleCoinInfo(coinIDLowerCase)
      .then((data) => {
        // console.log(data);
        setSingleCoinDetails(data);
      })
      .catch((err) => console.log(err));

    setLoader(false);
  }, []);

  console.log(coinID);
  // console.log(singleCoinDetails);
  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={60} color="teal" />
        </View>
      ) : (
        <View>
          <Image
            style={{ width: 40, height: 40, marginRight: 10 }}
            source={{
              uri: singleCoinDetails.image?.large,
            }}
          />
          <Text>{singleCoinDetails.name}</Text>
          <Text>{singleCoinDetails.symbol}</Text>
          <Text>{singleCoinDetails.market_cap_rank}</Text>
          <Text>{singleCoinDetails.market_data?.current_price?.usd}</Text>
          <Text>{singleCoinDetails.description?.en}</Text>
        </View>
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
});

export default Coin;
