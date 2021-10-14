import React from "react";
import { View, Text, StyleSheet } from "react-native";

// FIXME: custom header import. Don't Touch
// import Header from "./Widgets/Header";

const MainScreen = ({ navigation, route }) => {
  return (
    <React.Fragment>
      {/* FIXME: custom header component call. Don't Touch */}
      {/* <Header backArrow={false} title={"Crypto Coins"} /> */}

      <View style={styles.container}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla beatae
          dignissimos quibusdam quidem quae dolor cumque sed cupiditate ad
          repellendus nostrum non, amet necessitatibus eum consequuntur
          voluptate ab accusamus officiis!
        </Text>
        {/* <Text>{route.params.name}</Text> */}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default MainScreen;
