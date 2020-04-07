import React, { Component } from 'react';
import { Platform, StyleSheet,  View, ScrollView, Dimensions, Image } from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
var deviceWidth = Dimensions.get('window').width;


export default class Notification extends Component {
    
  render() {

    const RECENTDATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses ',
        price: '55 $'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '150 $'
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title:'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '200 $'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a',
        title:'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '55 $'
      },

    ]
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses ',
        price: '55 $'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '150 $'
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title:'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '200 $'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a',
        title:'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '55 $'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fb7f63',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '150 $'
      },
      {
        id: '58694a0f-3da1-471f-bd96-149d72',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '200 $'
      },
      {
        id: 'bd7acbea-46c2-aed5-3ad53abb28ba',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '55 $'
      },
      {
        id: '3ac68afc-48d3-a4f8-fbd91aa97f63',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '150 $'
      },
      {
        id: '58694a0f-471f-bd96-145571e29d72',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '200 $'
      },
      {
        id: 'bdcbea-c1b1-46c2-aed5-3ad53a',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '55 $'
      },
      {
        id: '3ac6fc-c605-48d3-a4f8-fb7f63',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '150 $'
      },
      {
        id: '586a0f-3da1-471f-bd96-149d72',
        title: 'A client purshased to buy 3 shirts, 4 Jeans, 5 Jackets and two shoses',
        price: '200 $'
      },
    ];

    return (
      
      <View style={styles.container}>
        <Text style={{marginLeft:20, marginBottom:1}} h3>Notification</Text>
        <ScrollView>
        <View style={styles.cardsContainer}>
        <Text style={{marginLeft:20, marginBottom:5}} h4>Recent</Text>
          <FlatList
             data={RECENTDATA}
             renderItem={({item}) => 
            
            <View style={styles.cardContainer}>
              <View style={styles.letterContainer}><Text style={styles.letter}>N</Text></View>
             <Text style={styles.cardTitle}>{item.title}</Text>
             <View style={styles.dateContainer}>
             <Text style={{marginHorizontal:5, alignContent:'center'}}>today</Text>
             </View>
             </View>

            }
             keyExtractor={item => item.id}
             />

          
        <Text style={{marginLeft:20, marginBottom:15}} h4>Earlier</Text>
          <FlatList
             data={DATA}
             renderItem={({item}) => 
            
            <View style={styles.cardContainer}>
              <View style={styles.letterContainer}><Text style={styles.letter}>N</Text></View>
             <Text style={styles.cardTitle}>{item.title}</Text>
             <View style={styles.dateContainer}>
             <Text style={{marginHorizontal:5, alignContent:'center'}}>2 day</Text>
             </View>
             </View>

            }
             keyExtractor={item => item.id}
             />

        </View>
</ScrollView>

      



      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,

  },
 
  cardsContainer:{
    
    // marginHorizontal:20,
    // marginBottom:30,
    width: deviceWidth

    
  },
  cardContainer:{
    flexDirection:'row',
    backgroundColor:'#fff',
    // borderRadius:10,
    borderWidth:0.1,
    borderColor:'#000',
    
    marginVertical:3,
    width: deviceWidth,
    // height:100,
    
    
  },
  letterContainer:{
    height:50,
    width:50,
    justifyContent:'center',
    backgroundColor: '#000',
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:30
  },
  letter:{
    color: '#fff',
    fontWeight:'bold',
    fontSize:20,
    alignSelf:'center'

  },

  cardTitle:{
    fontSize:15,
    marginHorizontal:10,
    marginBottom:15,
    marginTop:10,
    width: deviceWidth,
    flex: 1, 
    // flexWrap: 'wrap'

  },
  dateContainer:{
    height:50,
    width:50,
    justifyContent:'center',
    
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:30
  },
});