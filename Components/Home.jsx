import React, { Fragment } from "react";
import { StyleSheet, View, Linking } from "react-native";
import FlatButton from "./Shared/button";

const openWebsite = () => {
  Linking.openURL("https://manavrachna.edu.in/");
};

const Home = ({ navigation }) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.btnSpacer}>
          <FlatButton text="University" onPress={openWebsite} />
        </View>
        <View style={styles.btnSpacer}>
          <FlatButton
            text="CryptoCurrencies"
            onPress={() => navigation.push("Main", { name: "lorem" })}
          />
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  btn: {
    borderRadius: 8,
    paddingVertical: 12,
    textAlign: "center",
  },
  btnSpacer: {
    marginVertical: 16,
    marginHorizontal: 20,
  },
});

export default Home;
