import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import Loader from "./Widgets/Loader";

const Browser = ({ navigation, route }) => {
  // console.log(route);

  return (
    <React.Fragment>
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri: route.params.url,
          }}
          style={{ flex: 1 }}
        />
        {/* <Text>{route.params.url}</Text> */}
      </View>
    </React.Fragment>
  );
};

export default Browser;
