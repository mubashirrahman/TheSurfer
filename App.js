import React ,{useState}from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DragAndDrop from "volkeno-react-native-drag-drop";
import { StyleSheet, Text, View,Image, ScrollView} from "react-native";

const App=()=> {
  const [items, setItems] = useState([
    { id: 1, text: "Lanka Raws" ,image:require('./res/1.jpeg'),desc:'HR Manager - tcs'},
    { id: 2, text: "Enwaz Senzi",image:require('./res/2.jpeg') ,desc:'Senior Manager - Microsoft'},
    { id: 3, text: "Edward Rahu" ,image:require('./res/3.jpeg'),desc:'Team Lead - Cognizant'},
    { id: 4, text: "Kirthee Sheq" ,image:require('./res/4.jpeg'),desc:'Manager - Google'},
    { id: 5, text: "Deepa Sheq" ,image:require('./res/5.jpeg'),desc:'CMO - tcs'},
    { id: 5, text: "Rayu Reeq" ,image:require('./res/6.jpeg'),desc:'AED - Cognizant'},
  ]);
  const [zones, setZones] = useState([
    {
      id: 1,
      text: "Close Friends",
    },
    {
      id: 2,
      text: "Others",
    },
  ]);

  return (
    <ScrollView style={styles.container}>
    <DragAndDrop
      style={{backgroundColor:'transparent'}}
      contentContainerStyle={styles.contentContainerStyle}
      itemKeyExtractor={(item) => item.id}
      zoneKeyExtractor={(zone) => zone.id}
      zones={zones}
      items={items}
      itemsContainerStyle={styles.itemsContainerStyle}
      zonesContainerStyle={styles.zonesContainerStyle}
      onMaj={(zones, items) => {
        setItems(items);
        setZones(zones);
      }}
      itemsInZoneStyle={styles.itemsInZoneStyle}
      renderItem={(item) => {
        return (
          <View style={styles.dragItemStyle}>
            <Image source={item.image} style={styles.imageStyle}/>
            <Text style={styles.dragItemTextStyle}>{item.text}</Text>
            <Text style={styles.dragItemDescStyle}>{item.desc}</Text>
          </View>
        );
      }}
      renderZone={(zone, children, hover) => {
        return (
          <View
            style={{
              ...styles.dragZoneStyle,
              backgroundColor: hover ? "#E2E2E2" : "#FFF",
            }}
          >
            <Text style={styles.dragZoneTextStyle}>{zone.text}</Text>
            {children}
          </View>
        );
      }}
    />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
    paddingTop:hp('10%'),
  },
  contentContainerStyle: {
    padding: 20,
    paddingTop: 40,
  },
  dragItemStyle: {
    borderColor: "#CFCFCF",
    borderWidth: 1,
    borderRadius:wp('3%'),
    marginBottom:wp('3%'),marginHorizontal:wp('1%'),
    width: wp('24%'),
    height: wp('35%'),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  dragItemTextStyle: {
    color: "#011F3B",
    fontWeight: "700",
    textAlign: "center",
  },
  dragItemDescStyle:{
    color: "gray",
    fontSize:wp('3%'),
    textAlign: "center",
  },
  dragZoneStyle: {
    borderColor: "#CFCFCF",
    borderWidth: 1,
    borderRadius: wp('3%'),
    width: wp('44%'),
    marginTop:hp('10%'),
    minHeight: wp('30%'),
    marginBottom:hp('10%'),
  },
  dragZoneTextStyle: {
    textAlign:'center',
    fontWeight:'bod',
    color:'gray',
    padding:wp('2%'),
  },
  imageStyle:{
    width:wp('16%'),
    height:wp('16%'),
    borderRadius:wp('16%'),
    alignSelf:'center',marginVertical:wp('2%'),
  },
  itemsContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemsInZoneStyle: {
    width: "90%",
    alignSelf:'center',
  },
  zonesContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default App;