import React from "react";
import { View, Text } from "react-native";

const Browser = ({ navigation, route }) => {
  console.log(route);

  return (
    <React.Fragment>
      <View style={{ flex: 1 }}>
        {/* <WebView
          source={{
            uri: "https://www.binance.com/",
          }}
          style={{ flex: 1 }}
        /> */}
        <Text>{route.params.url}</Text>
      </View>
    </React.Fragment>
  );
};

export default Browser;
