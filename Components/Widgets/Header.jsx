import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const Header = () => {
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header style={styles.header} padding={20}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="Cryptalysis" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "teal",
  },
});

export default Header;
