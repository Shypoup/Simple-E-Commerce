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
  }
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
