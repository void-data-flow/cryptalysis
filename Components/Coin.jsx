import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { getSingleCoinInfo } from "../api/axios";
import { getMarketData } from "../api/cryptoService";

import { commaSepertor } from "./Widgets/comma";
import Loader from "./Widgets/Loader";
import Chart from "./Widgets/Chart";

import { Octicons } from "@expo/vector-icons";

const FlatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.flatButtonStyle}>
        <Text style={styles.flatButtonStyleText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

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

        const correctValues = getMarketData(
          resp.market_data?.sparkline_7d?.price
        );

        correctValues
          .then((successData) => {
            setJustForChart(successData);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [coinIDLowerCase]);

  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <Loader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.blockGrid}>
            <View
              style={[
                { flexDirection: "row", alignItems: "center" },
                styles.blockMargin,
              ]}>
              <Image
                style={styles.imgDesign}
                source={{
                  uri: singleCoinDetails.image?.large,
                }}
              />

              <View>
                <Text style={{ fontSize: 18 }}>
                  {singleCoinDetails?.name} (
                  {singleCoinDetails?.symbol
                    ? singleCoinDetails?.symbol.toUpperCase()
                    : ""}
                  )
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    marginVertical: 5,
                  }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", marginEnd: 5 }}>
                    $
                    {singleCoinDetails.market_data?.current_price?.usd
                      ? commaSepertor(
                          singleCoinDetails.market_data?.current_price?.usd.toFixed(
                            3
                          )
                        )
                      : ""}
                  </Text>
                  {Number(
                    singleCoinDetails?.market_data?.price_change_percentage_24h
                  ) > 0 ? (
                    <Text
                      style={[
                        styles.listItemText,
                        { color: "#1DCD92", fontSize: 16 },
                      ]}>
                      <Octicons name="triangle-up" size={16} color="#1DCD92" />
                      {commaSepertor(
                        Number(
                          singleCoinDetails?.market_data
                            ?.price_change_percentage_24h
                        ).toFixed(3)
                      )}
                      %
                    </Text>
                  ) : (
                    <Text
                      style={[
                        styles.listItemText,
                        { color: "red", fontSize: 16 },
                      ]}>
                      <Octicons name="triangle-down" size={16} color="red" />
                      {commaSepertor(
                        Number(
                          singleCoinDetails?.market_data
                            ?.price_change_percentage_24h
                        ).toFixed(3)
                      )}
                      %
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 5,
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1,
            }}>
            {justForChart ? <Chart chartArray={justForChart} /> : <Loader />}
          </View>

          <View style={styles.flatBox}>
            <FlatButton
              onPress={() => {
                navigation.navigate("Browser", {
                  exchangeName: singleCoinDetails?.name,
                  url: singleCoinDetails?.links?.homepage[0],
                });
              }}
              text={`Get ${singleCoinDetails?.name}`}
            />
          </View>

          <View style={styles.blockGrid}>
            <View style={styles.listItem}>
              <Text>24H</Text>
              <Text>7D</Text>
              <Text>30D</Text>
              <Text>60D</Text>
              <Text>1Y</Text>
            </View>

            <View style={styles.lineBtwSection} />

            <View style={styles.listItem}>
              {/* Percent change 24H */}
              {Number(
                singleCoinDetails?.market_data?.price_change_percentage_24h
              ) > 0 ? (
                <Text
                  style={[
                    styles.listItemText,
                    { color: "#1DCD92", fontSize: 12 },
                  ]}>
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
                <Text
                  style={[styles.listItemText, { color: "red", fontSize: 12 }]}>
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data
                        ?.price_change_percentage_24h
                    ).toFixed(2)
                  )}
                  %
                </Text>
              )}

              {/* Percent change 7D */}
              {Number(
                singleCoinDetails?.market_data?.price_change_percentage_7d
              ) > 0 ? (
                <Text
                  style={[
                    styles.listItemText,
                    { color: "#1DCD92", fontSize: 12 },
                  ]}>
                  +
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data?.price_change_percentage_7d
                    ).toFixed(2)
                  )}
                  %
                </Text>
              ) : (
                <Text
                  style={[styles.listItemText, { color: "red", fontSize: 12 }]}>
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data?.price_change_percentage_7d
                    ).toFixed(2)
                  )}
                  %
                </Text>
              )}

              {/* Percent change 30D */}
              {Number(
                singleCoinDetails?.market_data?.price_change_percentage_30d
              ) > 0 ? (
                <Text
                  style={[
                    styles.listItemText,
                    { color: "#1DCD92", fontSize: 12 },
                  ]}>
                  +
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data
                        ?.price_change_percentage_30d
                    ).toFixed(2)
                  )}
                  %
                </Text>
              ) : (
                <Text
                  style={[styles.listItemText, { color: "red", fontSize: 12 }]}>
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data
                        ?.price_change_percentage_30d
                    ).toFixed(2)
                  )}
                  %
                </Text>
              )}

              {/* Percent change 60D */}
              {Number(
                singleCoinDetails?.market_data?.price_change_percentage_60d
              ) > 0 ? (
                <Text
                  style={[
                    styles.listItemText,
                    { color: "#1DCD92", fontSize: 12 },
                  ]}>
                  +
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data
                        ?.price_change_percentage_60d
                    ).toFixed(2)
                  )}
                  %
                </Text>
              ) : (
                <Text
                  style={[styles.listItemText, { color: "red", fontSize: 12 }]}>
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data
                        ?.price_change_percentage_60d
                    ).toFixed(2)
                  )}
                  %
                </Text>
              )}

              {/* Percent change 1Y */}
              {Number(
                singleCoinDetails?.market_data?.price_change_percentage_1y
              ) > 0 ? (
                <Text
                  style={[
                    styles.listItemText,
                    { color: "#1DCD92", fontSize: 12 },
                  ]}>
                  +
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data?.price_change_percentage_1y
                    ).toFixed(2)
                  )}
                  %
                </Text>
              ) : (
                <Text
                  style={[styles.listItemText, { color: "red", fontSize: 12 }]}>
                  {commaSepertor(
                    Number(
                      singleCoinDetails?.market_data?.price_change_percentage_1y
                    ).toFixed(2)
                  )}
                  %
                </Text>
              )}
            </View>
          </View>

          <View style={styles.blockGrid}>
            <View style={styles.listItem}>
              <Text style={[styles.listItemText, { color: "grey" }]}>
                Market Cap Rank
              </Text>
              <Text style={styles.listItemText}>
                #
                {singleCoinDetails.market_cap_rank
                  ? commaSepertor(singleCoinDetails.market_cap_rank)
                  : "0"}
              </Text>
            </View>

            <View style={styles.lineBtwSection}></View>

            <View style={styles.listItem}>
              <Text style={[styles.listItemText, { color: "grey" }]}>
                Total Market Cap
              </Text>
              <Text style={styles.listItemText}>
                ${" "}
                {singleCoinDetails.market_data?.market_cap?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.market_cap?.usd.toFixed(2)
                    )
                  : "None"}
              </Text>
            </View>

            <View style={styles.lineBtwSection}></View>

            <View style={styles.listItem}>
              <Text style={[styles.listItemText, { color: "grey" }]}>
                Trading Volume
              </Text>
              <Text style={styles.listItemText}>
                ${" "}
                {singleCoinDetails.market_data?.total_volume?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.total_volume?.usd.toFixed(
                        2
                      )
                    )
                  : "None"}
              </Text>
            </View>

            <View style={styles.lineBtwSection}></View>

            <View style={styles.listItem}>
              <Text style={[styles.listItemText, { color: "grey" }]}>
                24Hr High
              </Text>
              <Text style={styles.listItemText}>
                $
                {singleCoinDetails.market_data?.high_24h?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.high_24h?.usd.toFixed(2)
                    )
                  : "None"}
              </Text>
            </View>

            <View style={styles.lineBtwSection}></View>

            <View style={styles.listItem}>
              <Text style={[styles.listItemText, { color: "grey" }]}>
                24Hr Low
              </Text>
              <Text style={styles.listItemText}>
                $
                {singleCoinDetails.market_data?.low_24h?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.low_24h?.usd.toFixed(2)
                    )
                  : "None"}
              </Text>
            </View>

            <View style={styles.lineBtwSection}></View>

            <View style={styles.listItem}>
              <Text style={[styles.listItemText, { color: "grey" }]}>
                Total Supply
              </Text>
              <Text style={styles.listItemText}>
                {singleCoinDetails.market_data?.total_supply
                  ? commaSepertor(
                      singleCoinDetails.market_data?.total_supply.toFixed(2)
                    )
                  : "None"}
              </Text>
            </View>

            <View style={styles.lineBtwSection}></View>

            <View style={styles.listItem}>
              <Text style={[styles.listItemText, { color: "grey" }]}>
                Available Supply
              </Text>
              <Text style={styles.listItemText}>
                {singleCoinDetails.market_data?.circulating_supply
                  ? commaSepertor(
                      singleCoinDetails.market_data?.circulating_supply.toFixed(
                        2
                      )
                    )
                  : "None"}
              </Text>
            </View>

            <View style={styles.lineBtwSection}></View>

            <View style={styles.listItem}>
              <Text style={[styles.listItemText, { color: "grey" }]}>
                All Time High
              </Text>
              <Text style={styles.listItemText}>
                ${" "}
                {singleCoinDetails.market_data?.ath?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.ath?.usd.toFixed(2)
                    )
                  : "None"}
              </Text>
            </View>

            <View style={styles.lineBtwSection}></View>

            <View style={styles.listItem}>
              <Text style={[styles.listItemText, { color: "grey" }]}>
                All Time Low
              </Text>
              <Text style={styles.listItemText}>
                ${" "}
                {singleCoinDetails.market_data?.atl?.usd
                  ? commaSepertor(
                      singleCoinDetails.market_data?.atl?.usd.toFixed(2)
                    )
                  : "None"}
              </Text>
            </View>
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
  },
  blockMargin: {
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  blockGrid: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "white",
    borderRadius: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  listItemText: {
    fontSize: 14,
    fontWeight: "normal",
  },
  imgDesign: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  lineBtwSection: {
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
  },
  flatButtonStyle: {
    borderRadius: 10,
    paddingVertical: 15,
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
  flatBox: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
});

export default Coin;
