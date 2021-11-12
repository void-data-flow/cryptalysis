import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getGlobalData } from "../../api/axios";

import Loader from "./Loader";

const SimpleCard = ({ text, iconName, subText }) => {
  console.log(subText);
  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <Ionicons name={iconName} size={20} color="#242424" />
        <Text style={{ fontSize: 14, color: "grey" }}>{text}</Text>
        <Text style={{ fontSize: 14, color: "grey" }}>{subText}</Text>
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
        console.log(resp.data.total_volume.usd);
        console.log(resp.data.total_market_cap.usd);
        setLoader(false);
        setGlobalObj(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("Line 38", globalObj.total_market_cap);

  return (
    <SafeAreaView>
      {loader ? (
        <Loader />
      ) : (
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <SimpleCard
              text="Coins"
              iconName="md-pricetag-outline"
              subText={globalObj.active_cryptocurrencies}
            />
            <SimpleCard
              text="Exchange"
              iconName="briefcase"
              subText={globalObj.markets}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <SimpleCard
              text="Market Cap"
              iconName="arrow-redo"
              // subText={String(globalObj.total_market_cap.usd.toFixed(2))}
            />
            <SimpleCard
              text="Volume"
              iconName="stopwatch"
              // subText={String(globalObj.total_volume.usd.toFixed(2))}
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
