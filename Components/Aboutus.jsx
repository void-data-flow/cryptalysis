import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewBlock}>
          <Text style={styles.heading}>About Application</Text>
          <Text style={styles.para}>
            Cryptalysis is a cryptocurrency price tracking application that also
            helps the user to get updated from the world of the crypto market.
          </Text>
          <Text style={styles.para}>
            Users can see the data of the change in market price with the help
            of live chart data and also get some general information about that
            particular cryptocurrency.
          </Text>
          <Text style={styles.para}>
            The application also includes a list of some of the major coin
            exchanges with their market capture and trust score.
          </Text>
        </View>

        <View style={styles.viewBlock}>
          <Text style={styles.heading}>Developers</Text>
          <View style={styles.memberRow}>
            <Text style={styles.memberRowText}>Sanchit Bajaj</Text>
            <Text
              style={[styles.memberRowText, { color: "#246EE9" }]}
              onPress={() =>
                Linking.openURL("https://github.com/sanchitbajaj02/")
              }>
              <MaterialCommunityIcons name="github" size={18} color="#246EE9" />
              GitHub
            </Text>
          </View>
          <View style={styles.memberRow}>
            <Text style={styles.memberRowText}>Harsh Mittal</Text>
            <Text
              style={[styles.memberRowText, { color: "#246EE9" }]}
              onPress={() =>
                Linking.openURL("https://github.com/harshmittal1750/")
              }>
              <MaterialCommunityIcons name="github" size={18} color="#246EE9" />
              GitHub
            </Text>
          </View>
        </View>

        <View style={styles.viewBlock}>
          <Text style={styles.heading}>Version</Text>
          <Text style={styles.para}>v1.9.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  viewBlock: {
    marginVertical: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  para: {
    fontSize: 16,
    padding: 2,
  },
  memberRow: {
    flexDirection: "row",
    marginVertical: 5,
  },
  memberRowText: {
    marginEnd: 20,
    fontSize: 16,
  },
});

export default About;
