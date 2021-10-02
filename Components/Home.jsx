import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import FlatButton from "./Shared/button";

const changePage = () => {
  console.log("Pressed");
};

const Home = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.btnSpacer}>
          <FlatButton text="hello world" onPress={changePage} />
        </View>
        <View style={styles.btnSpacer}>
          <FlatButton text="hello world" onPress={changePage} />
        </View>
        <View style={styles.btnSpacer}>
          <Button
            mode="contained"
            style={styles.btn}
            color="teal"
            onPress={changePage}
          >
            Press me
          </Button>
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
    marginVertical: 10,
  },
});

export default Home;
