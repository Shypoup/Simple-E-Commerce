import React, { Component } from 'react';
import { Platform, StyleSheet,  View, ScrollView, Dimensions, Image } from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
var deviceWidth = Dimensions.get('window').width;
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default class Profile extends Component {
    
  render() {


    return (
      <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
      <Text style={{marginLeft:20}} h3>Profile</Text>
      
    <View style={styles.categoryContainer}>
 
        <View style={styles.cardsContainer}>
 
            <View style={styles.cardContainer}>  
              <Text style={styles.cardPrice}>22</Text>
              <Text style={styles.cardTitle}>Total Orders</Text>
            </View>

            <View style={styles.cardContainer}>  
              <Text style={styles.cardPrice}>500$</Text>
              <Text style={styles.cardTitle}>Total Earnings</Text>
            </View>
            </View>
            <View style={styles.cardsContainer}>
            <View style={styles.cardContainer}>  
              <Text style={styles.cardPrice}>22</Text>
              <Text style={styles.cardTitle}>Total Orders</Text>
            </View>

            <View style={styles.cardContainer}>  
              <Text style={styles.cardPrice}>22</Text>
              <Text style={styles.cardTitle}>Total Orders</Text>
            </View>

            </View>

            
        <View style={{marginHorizontal:60} }>
  <Text>Bezier Line Chart</Text>
  
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June" ],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#fff",
      backgroundGradientFrom: "#000",
      backgroundGradientTo: "#000",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        

      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 20,
      borderRadius: 16,
      marginHorizontal:20,
      alignSelf:'center',
    }}
  />
</View>


        </View>



      



      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop:50,
    // justifyContent:'flex-start',
    width:deviceWidth ,
    
  },
 cardsContainer:{
   
    justifyContent:'center',
    alignContent:'center',
    flex:1,
    // flexWrap: 'wrap'
    // flexDirection:'row',
    
  },
  cardContainer:{
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth:0.1,
    borderColor:'#000',
    alignSelf:'center',
    marginVertical:5,
    width:deviceWidth  -50 ,

    // backgroundColor:'#fff',
    // borderRadius:10,
    // borderWidth:0.1,
    // borderColor:'#000',
    // marginHorizontal:5,
    // marginVertical:5,
    // // marginRight:10,
    // width:deviceWidth /2 -25,
  
    
  },
  cardTitle:{
    fontSize:18,
    marginHorizontal:10,
    marginBottom:15,
    marginTop:10,
    alignSelf:'center'
  },
  cardPrice:{
    fontSize:50,
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:10,
    marginHorizontal:10,


  },
 
});