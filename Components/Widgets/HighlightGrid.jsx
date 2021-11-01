import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SimpleCard = ({ text }) => {
  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <Text>{text}</Text>
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
          <SimpleCard text="View 1" />
          <SimpleCard text="View 2" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <SimpleCard text="View 3" />
          <SimpleCard text="View 4" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <SimpleCard text="View 5" />
          <SimpleCard text="View 6" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    width: "48%",
  },
});

export default HighlightGrid;
