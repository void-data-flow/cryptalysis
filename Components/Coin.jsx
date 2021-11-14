import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { getSingleCoinInfo } from "../api/axios";

import { commaSepertor } from "./Widgets/comma";
import Loader from "./Widgets/Loader";

import Chart from "./Widgets/Chart";
import RenderHTML from "react-native-render-html";

const Coin = ({ route, navigation }) => {
  const { width } = useWindowDimensions();

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
  const HTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <div style="font-size: 16px; padding: 5px 0;">${singleCoinDetails.description?.en}</div>
  </body>
  </html>`;
  // console.log(HTML);

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
            $
            {singleCoinDetails.market_data?.current_price?.usd
              ? commaSepertor(singleCoinDetails.market_data?.current_price?.usd)
              : ""}
          </Text>
          <Chart></Chart>
          <View>
            {!singleCoinDetails.description?.en ? (
              <Text style={{ fontSize: 20 }}>No Result Found</Text>
            ) : (
              <View>
                <Text style={{ fontWeight: "bold", marginVertical: 5 }}>
                  Text Component
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    paddingVertical: 5,
                  }}>
                  {singleCoinDetails.description?.en}
                </Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "bold", marginVertical: 5 }}>
                    RenderHTML Component
                  </Text>

                  <RenderHTML
                    style={{
                      fontSize: 16,
                      paddingVertical: 5,
                    }}
                    source={{
                      html: HTML,
                    }}
                    contentWidth={width}
                  />
                </View>
              </View>
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
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});

export default Coin;
