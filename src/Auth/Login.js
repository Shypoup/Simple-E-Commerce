import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity} from "react-native";
import { Input ,Text, CheckBox } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/FontAwesome';


export default Login =({navigation}) => (
<SafeAreaView style={styles.container}>
  
    <ImageBackground source={require('../../assets/auth5.jpg')} style={styles.image}>
  
        <Text style={styles.Header} h2>Login</Text>
            <Input
            inputContainerStyle={styles.InputContainer}
            inputStyle={styles.InputText}
            placeholder='Username'
            leftIcon={{ type: 'font-awesome', name: 'user' , color: 'white' }}
            //   errorMessage='ENTER A VALID ERROR HERE'
            />

            <Input
            inputContainerStyle={styles.InputContainer}
            inputStyle={styles.InputText}
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
            secureTextEntry={true} 
            //   errorMessage='ENTER A VALID ERROR HERE'
            />


            <CheckBox
            title='Remember me'
            containerStyle={styles.CheckBox}
            textStyle={styles.CheckBoxText}
            // checked={this.state.checked}
            />

            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}  h4>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.FacebookButton}>
                <Text style={styles.FacebookButtonText} ><Icon name="facebook" size={15}  color='#000'/>  Login with facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ForgetButton}
            onPress ={()=> navigation.navigate('Register')}
            >
                <Text style={styles.ForgetButtonText} >Don't have account ? Press here</Text>
            </TouchableOpacity>

    </ImageBackground>
 
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    
  },
  Header:{
      alignSelf:'center',
      color: 'white',
      marginBottom:50,
      marginTop:100,
  },
  InputText: {
    color: "white",
    fontSize: 20,
    marginLeft:10
    
  },
  InputContainer:{
    marginHorizontal:40,
    marginVertical:10

  },
  CheckBox:{
      backgroundColor:'transparent',
      borderColor: 'transparent',
      marginLeft:50,
      

  },
  CheckBoxText:{
      color:'#ccc8c5',
      fontWeight:'100',

  },
  Button:{
      backgroundColor: '#000',
      marginHorizontal:40,
      marginVertical:10,
      padding:10,
      borderRadius:30,

  },
  ButtonText:{
      color:'white',
      alignSelf:'center'
  },
  FacebookButton:{
    backgroundColor: 'white',
    marginHorizontal:40,
    marginVertical:10,
    padding:15,
    borderRadius:30,

},
FacebookButtonText:{
    color:'#000',
    alignSelf:'center'
},
ForgetButton:{
    marginHorizontal:70,
    padding:10,
    position: 'absolute',
    bottom:0,
    left:0,
},
ForgetButtonText:{
    color:'white',
    alignSelf:'center'
},
});
