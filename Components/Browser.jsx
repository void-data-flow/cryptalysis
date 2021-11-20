import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const Browser = ({ navigation, route }) => {
  // console.log(route);

  return (
    <React.Fragment>
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri: route.params.url,
          }}
        />
      </View>
    </React.Fragment>
  );
};

export default Browser;
