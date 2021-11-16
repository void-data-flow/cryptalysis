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
          <View style={[{ flexDirection: "row" }, styles.blockMargin]}>
            <View style={styles.shadow}>
              <Image
                style={styles.imgDesign}
                source={{
                  uri: singleCoinDetails.image?.large,
                }}
              />
            </View>
            <View style={{ marginStart: 10 }}>
              <Text style={styles.listItemText}>
                {singleCoinDetails?.name} (
                {singleCoinDetails?.symbol
                  ? singleCoinDetails?.symbol.toUpperCase()
                  : ""}
                )
              </Text>

              {Number(
                singleCoinDetails?.market_data?.price_change_percentage_24h
              ) > 0 ? (
                <Text style={[{ color: "green" }, styles.listItemText]}>
                  +
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data
                        ?.price_change_percentage_24h
                    ).toFixed(2)
                  )}
                  %
                </Text>
              ) : (
                <Text style={[{ color: "red" }, styles.listItemText]}>
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data
                        ?.price_change_percentage_24h
                    ).toFixed(2)
                  )}
                  %
                </Text>
              )}
            </View>
          </View>

          <View style={styles.blockMargin}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              $
              {singleCoinDetails.market_data?.current_price?.usd
                ? commaSepertor(
                    singleCoinDetails.market_data?.current_price?.usd.toFixed(3)
                  )
                : ""}
            </Text>
          </View>

          <View
            style={{
              marginTop: 5,
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1,
            }}>
            <Text style={{ textAlign: "center" }}>7 Days Graph</Text>
            {justForChart ? <Chart chartArray={justForChart} /> : <Loader />}
          </View>

          <View style={styles.blockMargin}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Market Cap Rank</Text>
              <Text style={styles.listItemText}>
                #
                {singleCoinDetails.market_cap_rank
                  ? commaSepertor(singleCoinDetails.market_cap_rank)
                  : ""}
              </Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Market Cap</Text>
              <Text style={styles.listItemText}>
                $
                {singleCoinDetails.market_data?.market_cap?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.market_cap?.usd.toFixed(2)
                    )
                  : ""}
              </Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Trading Volume</Text>
              <Text style={styles.listItemText}>
                $
                {singleCoinDetails.market_data?.total_volume?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.total_volume?.usd.toFixed(
                        2
                      )
                    )
                  : ""}
              </Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.listItemText}>24Hr High</Text>
              <Text style={styles.listItemText}>
                $
                {singleCoinDetails.market_data?.high_24h?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.high_24h?.usd.toFixed(2)
                    )
                  : ""}
              </Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.listItemText}>24Hr Low</Text>
              <Text style={styles.listItemText}>
                $
                {singleCoinDetails.market_data?.low_24h?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.low_24h?.usd.toFixed(2)
                    )
                  : ""}
              </Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Available Supply</Text>
              <Text style={styles.listItemText}>
                {singleCoinDetails.market_data?.circulating_supply
                  ? commaSepertor(
                      singleCoinDetails.market_data?.circulating_supply.toFixed(
                        2
                      )
                    )
                  : ""}
              </Text>
            </View>

            {/* <View style={styles.listItem}>
              <Text style={styles.listItemText}>All Time High</Text>
              <Text style={styles.listItemText}>
                $
                {singleCoinDetails.market_data?.market_cap?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.market_cap?.usd
                    )
                  : ""}
              </Text>
            </View> */}
          </View>

          <View style={styles.blockMargin}>
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
    // paddingHorizontal: 10,
    backgroundColor: "white",
  },
  blockMargin: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: "normal",
    marginVertical: 2,
  },
  imgDesign: {
    width: 60,
    height: 60,
  },
  shadow: {
    shadowColor: "#000",
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 50,
  },
});

export default Coin;
