import React, { Component } from 'react';
import { Platform, StyleSheet,  View, ScrollView, Dimensions, Image } from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
var deviceWidth = Dimensions.get('window').width;


export default class App extends Component {
    
  render() {

    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        price: '55 $'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        price: '150 $'
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        price: '200 $'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a',
        title: 'Fouth Item',
        price: '55 $'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fb7f63',
        title: 'Fifth Item',
        price: '150 $'
      },
      {
        id: '58694a0f-3da1-471f-bd96-149d72',
        title: 'Sixth Item',
        price: '200 $'
      },
      {
        id: 'bd7acbea-46c2-aed5-3ad53abb28ba',
        title: 'Item',
        price: '55 $'
      },
      {
        id: '3ac68afc-48d3-a4f8-fbd91aa97f63',
        title: ' Item',
        price: '150 $'
      },
      {
        id: '58694a0f-471f-bd96-145571e29d72',
        title: 'Item',
        price: '200 $'
      },
      {
        id: 'bdcbea-c1b1-46c2-aed5-3ad53a',
        title: 'Item  Item  Item  Item  Item  Item  Item  Item  Item  ',
        price: '55 $'
      },
      {
        id: '3ac6fc-c605-48d3-a4f8-fb7f63',
        title: 'Item',
        price: '150 $'
      },
      {
        id: '586a0f-3da1-471f-bd96-149d72',
        title: 'Item',
        price: '200 $'
      },
    ];

    return (
      <View style={styles.container}>
        <Text style={{marginLeft:20}} h3>Home</Text>
        <View style={styles.categoryContainer}>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>Watches</Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>Suits</Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>Blazers</Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>Casual Shirts</Text>
          </View>
          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>Jeans</Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>T-Shirts</Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>Vests</Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>Sweats</Text>
          </View>
          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>Sleepwear and Robes</Text>
          </View>
          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>Swim wear</Text>
          </View>

          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>Underwear</Text>
          </View>
        </ScrollView>
          
        </View>



        <View style={styles.cardsContainer}>
        
          <FlatList
             contentContainerStyle={{alignSelf: 'flex-start'}}
             numColumns={2}
             showsVerticalScrollIndicator={false}
             showsHorizontalScrollIndicator={false}
             data={DATA}
             renderItem={({item}) => 
            
            <View style={styles.cardContainer}>
             <Image source={require('../../assets/auth.jpg')} style={styles.cardImage} />
             <Text style={styles.cardPrice}>{item.price}</Text>
             <Text style={styles.cardTitle}>{item.title}</Text>
             </View>

            }
             keyExtractor={item => item.id}
             />

        </View>


      



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    justifyContent:'flex-start'
  },
  categoryContainer:{
   marginBottom:30,
   
    
  },
  headerText: {
    fontSize: 15,
    margin: 10,
    marginTop:30,
    color: '#000',
    marginLeft:30,
    
  },
  scrollItem: {
    flexDirection: 'row',
    // height:200,
  },
  cardsContainer:{
    flexDirection:'row',
    marginHorizontal:20,
    marginBottom:150,
  },
  cardContainer:{
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth:0.1,
    borderColor:'#000',
    marginHorizontal:5,
    marginVertical:5,
    // marginRight:10,
    width:deviceWidth /2 -25,
    
    
  },
  cardContainer2:{
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth:0.1,
    borderColor:'#000',
    marginVertical:5,
    width:deviceWidth /2 -30,
    
    
  },
  cardTitle:{
    fontSize:15,
    marginHorizontal:10,
    marginBottom:15,
    marginTop:10,

  },
  cardPrice:{
    fontSize:25,
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:10,


  },
  cardImage:{
    height:150,
    width:deviceWidth /2 -20,
    resizeMode:'contain',
  },
 
});