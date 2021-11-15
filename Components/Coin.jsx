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
import { getMarketData } from "../api/cryptoService";

import { commaSepertor } from "./Widgets/comma";
import Loader from "./Widgets/Loader";

import Chart from "./Widgets/Chart";
import RenderHTML from "react-native-render-html";

const Coin = ({ route, navigation }) => {
  const { width } = useWindowDimensions();

  const { coinID, coinName } = route.params;
  const coinIDLowerCase = coinID.toLowerCase();

  const [singleCoinDetails, setSingleCoinDetails] = useState({});
  const [justForChart, setJustForChart] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getSingleCoinInfo(coinIDLowerCase)
      .then((resp) => {
        setLoader(false);

        setSingleCoinDetails(resp);

        const correctValues = getMarketData(resp);

        correctValues
          .then((successData) => {
            setJustForChart(successData);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [coinIDLowerCase]);

  // console.log(justForChart);

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

  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <Loader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View>
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri: singleCoinDetails.image?.large,
              }}
            />
            <Text>
              {singleCoinDetails?.name} ({coinName})
            </Text>
          </View>

          <Text>Rank - {singleCoinDetails.market_cap_rank}</Text>

          <View>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              $
              {singleCoinDetails.market_data?.current_price?.usd
                ? commaSepertor(
                    singleCoinDetails.market_data?.current_price?.usd.toFixed(3)
                  )
                : ""}
            </Text>
          </View>

          <View>
            {justForChart ? <Chart chartArray={justForChart} /> : <Loader />}
          </View>

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
