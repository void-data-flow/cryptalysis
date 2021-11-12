import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { getSingleCoinInfo } from "../api/axios";
import Loader from "./Widgets/Loader";

const Coin = ({ route, navigation }) => {
  const { coinID, coinName } = route.params;
  const coinIDLowerCase = coinID.toLowerCase();

  const [singleCoinDetails, setSingleCoinDetails] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getSingleCoinInfo(coinIDLowerCase)
      .then((data) => {
        // console.log(data);
        setLoader(false);
        setSingleCoinDetails(data);
      })
      .catch((err) => console.log(err));
  }, [coinIDLowerCase]);

  console.log(coinID);
  // console.log(singleCoinDetails);
  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <Loader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <Image
              style={{ width: 80, height: 80 }}
              source={{
                uri: singleCoinDetails.image?.large,
              }}
            />
            <Text>{singleCoinDetails?.name}</Text>
          </View>
          <Text>{coinName}</Text>
          <Text>{singleCoinDetails.market_cap_rank}</Text>
          <Text style={{ fontSize: 30 }}>
            ${singleCoinDetails.market_data?.current_price?.usd}
          </Text>

          <View>
            {!singleCoinDetails.description?.en ? (
              <Text style={{ fontSize: 20 }}>No Result Found</Text>
            ) : (
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "justify",
                  paddingVertical: 5,
                }}>
                {singleCoinDetails.description?.en}
              </Text>
            )}
          </View>
        </ScrollView>
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
