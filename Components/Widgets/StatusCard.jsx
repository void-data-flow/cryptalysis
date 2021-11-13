import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { getStatusUpdates } from "../../api/axios";
import Loader from "./Loader";

const StatusCard = () => {
  const [getStatusData, setStatusData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    getStatusUpdates(20)
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
    <React.Fragment>
      {loader ? (
        <Loader />
      ) : (
        <View>
          {getStatusData.map((dataObj, index) => {
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
                  <Text style={{ paddingBottom: 2, color: "grey" }}>
                    Project Name - {dataObj?.project.name}, type -{" "}
                    {dataObj?.project.type}
                  </Text>
                  <Text>
                    {dataObj?.description ? dataObj?.description : "Not found"}
                  </Text>
                </ScrollView>
              </View>
            );
          })}
        </View>
      )}
    </React.Fragment>
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
});

export default StatusCard;
