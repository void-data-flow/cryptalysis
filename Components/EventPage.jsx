import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { getStatusUpdates } from "../api/axios";
import Loader from "./Widgets/Loader";

const EventItem = ({ dataObj, index }) => {
  return (
    <View style={styles.cardView} key={index}>
      <View style={{ marginEnd: 10 }}>
        <Image
          style={{ width: 60, height: 60, padding: 5 }}
          source={{ uri: dataObj?.project?.image?.large }}
        />
      </View>
      <ScrollView>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {dataObj?.user_title ? dataObj?.user_title : "Anonymous"}
        </Text>

        <Text style={{ paddingBottom: 2, color: "grey" }}>
          {dataObj?.user ? dataObj?.user : "Anonymous"} -{" "}
          {new Date().toLocaleString(dataObj?.created_at)}
        </Text>

        <Text style={{ paddingBottom: 2 }}>
          Category: {dataObj?.category ? dataObj?.category : "Not Found"}
        </Text>

        <View style={{ paddingVertical: 5 }}>
          <Text style={{ fontWeight: "bold" }}>Project Details</Text>
          <Text>- Name: {dataObj.project.name}</Text>
          <Text>- Type: {dataObj.project.type}</Text>
        </View>

        <Text>{dataObj?.description ? dataObj?.description : "Not Found"}</Text>
      </ScrollView>
    </View>
  );
};

const Events = () => {
  const [getStatusData, setStatusData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    getStatusUpdates(50)
      .then((respData) => {
        // console.log("REs", respData.status_updates);
        setLoader(false);
        setStatusData(respData.status_updates);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(getStatusData[0]?.project?.image?.large);

  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <Loader />
      ) : (
        // <ScrollView showsVerticalScrollIndicator={false}>
        //   {getStatusData.map((dataObj, index) => {
        //     return (
        //       <View style={styles.cardView} key={index}>
        //         <View style={{ marginEnd: 10 }}>
        //           <Image
        //             style={{ width: 60, height: 60, padding: 5 }}
        //             source={{ uri: dataObj?.project?.image?.large }}
        //           />
        //         </View>
        //         <ScrollView>
        //           <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        //             {dataObj?.user_title ? dataObj?.user_title : "Anonymous"}
        //           </Text>

        //           <Text style={{ paddingBottom: 2, color: "grey" }}>
        //             {dataObj?.user ? dataObj?.user : "Anonymous"} -{" "}
        //             {new Date().toLocaleString(dataObj?.created_at)}
        //           </Text>

        //           <Text style={{ paddingBottom: 2 }}>
        //             Category:{" "}
        //             {dataObj?.category ? dataObj?.category : "Not Found"}
        //           </Text>

        //           <View style={{ paddingVertical: 5 }}>
        //             <Text style={{ fontWeight: "bold" }}>Project Details</Text>
        //             <Text>- Name: {dataObj.project.name}</Text>
        //             <Text>- Type: {dataObj.project.type}</Text>
        //           </View>

        //           <Text>
        //             {dataObj?.description ? dataObj?.description : "Not Found"}
        //           </Text>
        //         </ScrollView>
        //       </View>
        //     );
        //   })}
        // </ScrollView>
        <FlatList
          data={getStatusData}
          renderItem={({ item, index }) => (
            <EventItem dataObj={item} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={Loader}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
  },

  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default Events;
