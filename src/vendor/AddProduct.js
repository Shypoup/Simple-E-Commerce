import React from 'react';
import {
   StyleSheet,
   View,
   ScrollView,
   Image,
   Button
  
  } from 'react-native';

import { Input ,Text, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


export default class AddProduct extends React.Component {
 

  state={
    title:'',
    price:'',
    category:'',
    categoryPressed:false,
    image: null,


  }

  
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };





  
  render(){
    let { image } = this.state;
  return (
    <View style={styles.container}>

      <Text style={styles.Header} h2>Add Product</Text>
      
      <Input
            inputContainerStyle={styles.InputContainer}
            inputStyle={styles.InputText}
            placeholder='title'
            placeholderTextColor='#403e3e'
            leftIcon={{ type: 'ionicon', name: 'ios-shirt' , color: 'black' }}
            //   errorMessage='ENTER A VALID ERROR HERE'

            returnKeyType = { "next" }
            onSubmitEditing={() => { this.Price.focus(); }}
            />
      
      <Input
            inputContainerStyle={styles.InputContainer}
            inputStyle={styles.InputText}
            placeholder='price'
            placeholderTextColor='#403e3e'
            leftIcon={{ type: 'foundation', name: 'dollar' , color: 'black' }}
            keyboardType= "numeric" 

            ref={ref => {this.Price = ref;}} 
            returnKeyType = { "next" }
            onSubmitEditing={() => { this.Quantity.focus(); }}
            
            //   errorMessage='ENTER A VALID ERROR HERE'
            />
        
        <Input
            inputContainerStyle={styles.InputContainer}
            inputStyle={styles.InputText}
            placeholder='quantity'
            placeholderTextColor='#403e3e'
            leftIcon={{ type: 'material-community', name: 'numeric' , color: 'black' }}
            keyboardType= "numeric" 

            ref={ref => {this.Quantity = ref;}} 
            returnKeyType = { "next" }
            onSubmitEditing={() => { this.Description.focus(); }}
            //   errorMessage='ENTER A VALID ERROR HERE'
            />

        <Input
            inputContainerStyle={styles.InputContainer}
            inputStyle={styles.InputText}
            placeholder='description'
            placeholderTextColor='#403e3e'
            leftIcon={{ type: 'entypo', name: 'text' , color: 'black' }}
            //   errorMessage='ENTER A VALID ERROR HERE'
            returnKeyType = { "next" }
            ref={ref => {this.Description = ref;}} 
            onSubmitEditing={() => { this.Category.focus(); }}
            
            
            />







        <TouchableOpacity
        style={styles.CategoryContainer}
        onPress={()=>{{this.state.categoryPressed == false ? this.setState({categoryPressed: true}):this.setState({categoryPressed: false}) }
         
        }
      }
        >
          <View style={styles.CategoryInnerContainer}>
        <Icon name='th-list' type='font-awesome' size={18} 
        iconStyle={{marginTop: 8}}
        />
        <Text style={styles.CategoryText}>Category</Text>
        </View>
        </TouchableOpacity>


         
        
        {this.state.categoryPressed==true ? 
            
           
          
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
 : null}


    <View style={styles.CategoryContainer} >

        <TouchableOpacity style={styles.CategoryInnerContainer}  onPress={this._pickImage} >
        <Icon
              
              name='image'
              type='font-awesome'
               />
         {image? <Text style={styles.CategoryText}>Uploaded</Text>:<Text style={styles.CategoryText}>Select an Image</Text>}
            
        </TouchableOpacity>
        
      </View>
      

            
      <TouchableOpacity
        style={styles.CategoryContainer}
        >
          <View style={styles.CategoryInnerContainer}>
        <Icon name='map-marker' type='font-awesome' size={18} 
        iconStyle={{marginTop: 8}}
        />
        <Text style={styles.CategoryText}>Pick a location </Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}  h4>Submit</Text>
            </TouchableOpacity>


             





    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
   
  },
  Header:{
    marginVertical:50,
    alignSelf:'center'
  },

  InputContainer:{
    marginHorizontal:40,
    marginVertical:10,
    flexDirection:'row',
    alignItems:'flex-start',
  },
  InputText: {
    color: "black",
    fontSize: 20,
    marginLeft:10,
    alignSelf:'flex-start'
    
  },

  CategoryContainer:{
    marginHorizontal:50,
    marginVertical:10,
    flexDirection:'row',
    alignItems:'flex-start',
    borderBottomColor:'gray',
    borderBottomWidth:1
    
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
  Button:{
    backgroundColor: '#000',
    marginHorizontal:40,
    marginVertical:10,
    padding:10,
    borderRadius:30,
    marginTop: 60,

},
ButtonText:{
    color:'white',
    alignSelf:'center',
},
});

// import * as React from 'react';
// import { Button, Image, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';

// export default class ImagePickerExample extends React.Component {
//   state = {
//     image: null,
//   };

//   render() {
//     let { image } = this.state;

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button title="Pick an image from camera roll" onPress={this._pickImage} />
//         {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       </View>
//     );
//   }

//   componentDidMount() {
//     this.getPermissionAsync();
//   }

//   getPermissionAsync = async () => {
//     if (Constants.platform.ios) {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (status !== 'granted') {
//         alert('Sorry, we need camera roll permissions to make this work!');
//       }
//     }
//   };

//   _pickImage = async () => {
//     try {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
//       if (!result.cancelled) {
//         this.setState({ image: result.uri });
//       }

//       console.log(result);
//     } catch (E) {
//       console.log(E);
//     }
//   };
// }


// import React, { useState, useEffect } from 'react';
// import { Platform, Text, View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';
// import * as Location from 'expo-location';

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   });

//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={{justifyContent:'center' , alignItems:'center'}}>
//       <Text >{text}</Text>
//     </View>
//   );
// }



// import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import { MapView, Location } from 'expo';
// import Constants from 'expo-constants';
// import {Permissions} from 'expo-permissions'


// export default class App extends Component {
//   state = {
//     mapRegion: null,
//     hasLocationPermissions: false,
//     locationResult: null
//   };

//   componentDidMount() {
//     this.getLocationAsync();
//   }

//     handleMapRegionChange (mapRegion){
//       console.log(mapRegion);
//       this.setState({ mapRegion });
//     }

//   async getLocationAsync (){
//    let { status } = await Permissions.askAsync(Permissions.LOCATION);
//    if (status !== 'granted') {
//      this.setState({
//        locationResult: 'Permission to access location was denied',
//      });
//    } else {
//      this.setState({ hasLocationPermissions: true });
//    }

//    let location = await Location.getCurrentPositionAsync({});
//    this.setState({ locationResult: JSON.stringify(location) });
   
//    // Center the map on the location we just fetched.
//     this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>
//           Pan, zoom, and tap on the map!
//         </Text>
        
//         {
//           this.state.locationResult === null ?
//           <Text>Finding your current location...</Text> :
//           this.state.hasLocationPermissions === false ?
//             <Text>Location permissions are not granted.</Text> :
//             this.state.mapRegion === null ?
//             <Text>Map region doesn't exist.</Text> :
//             <MapView
//               style={{ alignSelf: 'stretch', height: 400 }}
//               region={this.state.mapRegion}
//               onRegionChange={this.handleMapRegionChange}
//             />
//         }
        
//         <Text>
//           Location: {this.state.locationResult}
//         </Text>
//       </View>
        
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     paddingTop: Constants.statusBarHeight,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#34495e',
//   },
// });
