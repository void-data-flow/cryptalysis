import React from "react";
import { View, Text, StyleSheet ,Flatlist, SafeAreaView, ScrollView,} from "react-native";
import CryptoList from "./CryptoList";
import {API_KEY} from '@env';
const MainScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView    showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>


       {/* <Text style={{fontSize:"2em"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur cumque mollitia nesciunt id officia necessitatibus quis optio modi ipsa quas saepe repellat quia, harum laboriosam sunt unde recusandae tempora assumenda? Similique nobis magni ratione? Ut voluptatum quibusdam sit necessitatibus veniam! Recusandae, vero pariatur. Earum distinctio ipsam veritatis veniam omnis. Ullam natus illum non, voluptate vel quidem omnis minus dolorem beatae labore. Odio sed mollitia unde ducimus rem voluptatibus possimus explicabo harum omnis neque atque, animi, ullam labore voluptate ut veritatis fuga perspiciatis odit recusandae ipsa nisi alias quae! Corrupti nemo deserunt dolorem soluta distinctio aliquid laboriosam ipsa quas incidunt enim eveniet quasi beatae quo ab in iure similique voluptates nihil consectetur optio cupiditate ea fugit, officia asperiores. Ea sint mollitia aspernatur sapiente repellat, vero nulla quaerat obcaecati. Assumenda, eos!</Text> */}

        <CryptoList navigation={navigation} route={route}/>
     </ScrollView>
      <Text>{route.params.name}</Text>
      <Text>{API_KEY}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default MainScreen;
