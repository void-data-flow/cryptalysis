import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getGlobalData } from "../../api/axios";
import { commaSepertor } from "./comma";
import Loader from "./Loader";

const SimpleCard = ({ text, iconName, subText }) => {
  // console.log(subText);
  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#242424",
            paddingVertical: 2,
          }}>
          {text}
        </Text>
        <Text style={{ fontSize: 14, color: "#242424", paddingVertical: 2 }}>
          {subText}
        </Text>
      </View>
    </React.Fragment>
  );
};

// TODO: this section is to show some records like total market capture and total coins listed

const HighlightGrid = () => {
  const [globalObj, setGlobalObj] = React.useState({});
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    getGlobalData()
      .then((resp) => {
        // console.log(resp.data?.total_volume?.usd);
        // console.log(resp.data?.total_market_cap?.usd);

        setTimeout(() => {
          // console.log("Total Market Cap:", globalObj);
          // console.log("Total volume:", globalObj);
          setLoader(false);
          setGlobalObj(resp);
        }, 2000);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <SafeAreaView>
      {loader ? (
        <Loader />
      ) : (
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <SimpleCard
              text="Coins Listed"
              subText={
                globalObj?.active_cryptocurrencies
                  ? commaSepertor(globalObj?.active_cryptocurrencies)
                  : ""
              }
            />
            <SimpleCard
              text="Total Exchanges"
              subText={
                globalObj?.markets ? commaSepertor(globalObj?.markets) : ""
              }
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <SimpleCard
              text="Total Market Cap"
              subText={
                globalObj.total_market_cap?.usd
                  ? `$${commaSepertor(
                      globalObj.total_market_cap?.usd.toFixed(2)
                    )}`
                  : ""
              }
            />
            <SimpleCard
              text="24H Volume"
              subText={
                globalObj.total_volume?.usd
                  ? `$${commaSepertor(globalObj.total_volume?.usd.toFixed(2))}`
                  : ""
              }
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: "48%",
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
});

export default HighlightGrid;
