import React,{useState,useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { getCoinList } from '../api/axios';
// const DATA = [
//     {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'First Item',
//       },
//       {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Second Item',
//       },
//       {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Third Item',
//       }, {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'First Item',
//       },
//       {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Second Item',
//       },
//       {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Third Item',
//       }, {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'First Item',
//       },
//       {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Second Item',
//       },
//       {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Third Item',
//       }, {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'First Item',
//       },
//       {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Second Item',
//       }, {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'First Item',
//       },
//       {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Second Item',
//       }, {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'First Item',
//       },
//       {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Second Item',
//       },
//       {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Third Item',
//       },
//       {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Third Item',
//       },
//       {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Third Item',
//       },
// ];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CryptoList = () => {
    const [coinData,setData] = useState([]);
    useEffect(()=>{
        getCoinList().then(res=>{
            setData(res.data.data);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={coinData}
                renderItem={({ item }) => <Item title={item.name} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
//   const renderItem = ({ item }) => (
//     <Item title={item.title} />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default CryptoList;