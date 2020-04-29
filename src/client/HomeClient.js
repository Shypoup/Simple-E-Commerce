import React, { Component } from 'react';
import { Platform, StyleSheet,  View, ScrollView, Dimensions, Image } from 'react-native';
import {Text, Icon} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
var deviceWidth = Dimensions.get('window').width;


export default class App extends Component {

        state={
          category:''
        }

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

           
<View style={styles.CategoriesContainer}>
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.CategoryIconContainer}>
            <Icon
              raised
              name='watch'
              type='feather'
              onPress={() => this.state.category ='wathces'} />
              <Text style={styles.IconText}>Watches</Text>
          </View>

          <View style={styles.CategoryIconContainer}>
            <Icon
              raised
              name='ios-shirt'
              type='ionicon'
              
              onPress={() =>this.state.category ='Casual',
                  console.log(this.state.category)
                  
              } />
              <Text  style={styles.IconText}>Casual</Text>
          </View>


          <View style={styles.CategoryIconContainer}>
            <Icon
              raised
              name='torso-business'
              type='foundation'
              
              onPress={() =>this.state.category ='Suits',
                  console.log(this.state.category)
                  
              } />
              <Text  style={styles.IconText}>Suits</Text>
          </View>

          <View style={styles.CategoryIconContainer}>
            <Icon
              raised
              name='tie'
              type='material-community'
              
              onPress={() =>this.state.category ='Ties',
                  console.log(this.state.category)
                  
              } />
              <Text  style={styles.IconText}>Ties</Text>
          </View>

          <View style={styles.CategoryIconContainer}>
            <Icon
              raised
              name='ios-wallet'
              type='ionicon'
              
              onPress={() =>this.state.category ='Wallet',
                  console.log(this.state.category)
                  
              } />
              <Text  style={styles.IconText}>Wallet</Text>
          </View>

          <View style={styles.CategoryIconContainer}>
            <Icon
              raised
              name='ios-basketball'
              type='ionicon'
              
              onPress={() =>this.state.category ='Sportswear',
                  console.log(this.state.category)
                  
              } />
              <Text  style={styles.IconText}>Sport</Text>
          </View>


          <View style={styles.CategoryIconContainer}>
            <Icon
              raised
              name='shoe-formal'
              type='material-community'
              
              onPress={() =>this.state.category ='Shoes',
                  console.log(this.state.category)
                  
              } />
              <Text  style={styles.IconText}>Shoes</Text>
          </View>


          <View style={styles.CategoryIconContainer}>
            <Icon
              raised
              name='md-bed'
              type='ionicon'
              
              onPress={() =>this.state.category ='Sleep',
                  console.log(this.state.category)
                  
              } />
              <Text  style={styles.IconText}>Sleep</Text>
          </View> 

          <View style={styles.CategoryIconContainer}>
            <Icon
              raised
              name='swim'
              type='material-community'
              
              onPress={() =>this.state.category ='Swim',
                  console.log(this.state.category)
                  
              } />
              <Text  style={styles.IconText}>Swim</Text>
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
            <TouchableOpacity 
              onPress={()=>{ console.warn("Pressed")
                this.props.navigation.navigate("Login")
            
              }
            }
            >
             <Image source={require('../../assets/auth.jpg')} style={styles.cardImage} />
             <Text style={styles.cardPrice}>{item.price}</Text>
             <Text style={styles.cardTitle}>{item.title}</Text>
             </TouchableOpacity>
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

  
  CategoriesContainer:{
    marginHorizontal:10,
    marginTop:10,
    marginBottom:30,
    flexDirection:'row',
    alignItems:'flex-start',
   
    
  },
  CategoryInnerContainer:{
    flexDirection:'row',
    marginLeft:20
  },

  CategoryText: {
    color: "black",
    fontSize: 20,
    marginLeft:10,
    alignSelf:'flex-start',
    marginBottom:8
    
  },

  CategoryIconContainer:{
    alignItems:'center'
  },
  IconText:{
    fontSize:12
  },
 
});