import React, { Component } from 'react';
import { Platform, StyleSheet,  View, ScrollView, Dimensions, Image } from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
var deviceWidth = Dimensions.get('window').width;


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginLeft:20}} h3>Home</Text>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.scrollItem}>
            <Text style={styles.headerText}>watches</Text>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
  },
  headerText: {
    fontSize: 15,
    margin: 10,
    marginTop:30,
    color: '#000',
    
  },
  scrollItem: {
    flexDirection: 'row'
  },
 
});