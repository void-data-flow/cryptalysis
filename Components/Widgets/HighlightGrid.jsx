import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SimpleCard = ({ text, iconName }) => {
  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <Ionicons name={iconName} size={32} color="green" />
        <Text style={{ fontSize: 18, color: "grey" }}>{text}</Text>
      </View>
    </React.Fragment>
  );
};

// TODO: this section is to show some records like total market capture and total coins listed

const HighlightGrid = () => {
  return (
    <>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <SimpleCard text="Price Alert" iconName="md-pricetag-outline" />

          <SimpleCard text="Portfolio" iconName="briefcase" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <SimpleCard text="Convert" iconName="arrow-redo" />
          <SimpleCard text="Watchlist" iconName="stopwatch" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: "48%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default HighlightGrid;
