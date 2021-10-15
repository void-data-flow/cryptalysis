import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, Text } from "react-native";

const Header = (props) => {
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");

  return props.backArrow ? (
    <>
      <Appbar.Header style={styles.header} padding={20}>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title={props.title} />
        {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>
      <Text>{props.backArrow}</Text>
    </>
  ) : (
    <>
      <Appbar.Header style={styles.header} padding={20}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title={props.title} />
        {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "teal",
    // padding: "10px",
  },
});

export default Header;
