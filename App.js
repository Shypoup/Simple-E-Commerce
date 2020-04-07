import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AnimatedTabBar, {TabsConfigsType} from '@gorhom/animated-tabbar';
import { Ionicons } from '@expo/vector-icons';


//Import Screens
import HomeVendor from './src/vendor/HomeVendor';
import Profile from './src/vendor/Profile';
import Login  from './src/Auth/Login';
import Register  from './src/Auth/Register';
import AddProducts from './src/vendor/AddProduct';
import Notification from './src/vendor/Notification';





const icon = <Ionicons name="ios-home" size={22}   />;
const icon2 = <Ionicons name="ios-add-circle" size={22}  />;
const icon3 = <Ionicons name="md-notifications" size={22}  />;
const icon4 = <Ionicons name="md-person" size={22}  />;

const tabs= {
  Home: {
    labelStyle: {
      color: 'gray',
    },
    icon: {
      component: icon,
      activeColor: '#999897',
      inactiveColor: '#999897',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Add: {
    labelStyle: {
      color: 'gray',
    },
    icon: {
      component: icon2,
      activeColor: 'rgba(17,0,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
      color : 'gray'
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Notification: {
    labelStyle: {
      color: 'gray',
    },
    icon: {
      component: icon3,
      activeColor: 'rgba(17,0,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
      color : 'gray'
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Profile: {
    labelStyle: {
      color: 'gray',
    },
    icon: {
      component: icon4,
      activeColor: 'rgba(17,0,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
      color : 'gray'
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};




const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();      //Stack  object


// Stack navigation for Login 
export default function Auth() {
  return (
    <SafeAreaProvider>
  <NavigationContainer>
     <Stack.Navigator>
         
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} /> 
          <Stack.Screen name="Ap" component={HomeContainer} options={{ headerShown: false }} />
           
    </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
   
  );
}

 function HomeContainer() {
  return (
    
      <Tab.Navigator
        tabBar={props => (
          <AnimatedTabBar tabs={tabs} {...props} />
        )}
      >
        <Tab.Screen
          name="Home"
          component={HomeVendor}
        />
         <Tab.Screen
          name="Add"
          component={AddProducts}
        />
         <Tab.Screen
          name="Notification"
          component={Notification}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
        />
        
      </Tab.Navigator>
   
  )
}