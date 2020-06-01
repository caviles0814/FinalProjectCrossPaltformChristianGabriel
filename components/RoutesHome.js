import React, { Component } from "react";
import * as firebase from "firebase";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import  {SafeAreaView,View,Text,StyleSheet,Image,ScrollView,TouchableOpacity}  from 'react-native';
import AppointmentsScreen from './AppointmentsScreen';
import HomeScreen from './Home';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SettingScreen from './Setting';
import BTUcalculatorScreen from './BTUcalculatorScreen';
import ConsolesScreen from './ConsolesScreen';
import ConsoleList from './ConsoleList';
import TransactionScreen from './Transaction';
import PartsScreen from  './PartsScreen';
import ConsoleDetails from './ConsoleDetails';
import BGImage from './Icons/cod_logo.png'; 
import CreateAppointment from './createAppointment';
import History from './History';
//  import Login from './LoginForm';

 


 

const HomeStack = createStackNavigator({

     
    HomeStack: {screen: HomeScreen,
    },
    Appointments:{screen:AppointmentsScreen},
    Calculator:{screen:BTUcalculatorScreen},
    Consoles:{screen:ConsolesScreen},
    ConsoleList:{screen:ConsoleList},
    Transaction:{screen:TransactionScreen},
    Parts:{screen:PartsScreen},
    Details:{screen:ConsoleDetails},
    CreateAppointment:{screen:CreateAppointment},
    History:{screen:History}
    // Login1:{screen:Login}
    
    

     
  },{
    initialRouteName: 'HomeStack',
     
  });
const HomeRoutes = createDrawerNavigator({
     
    HomeDrawer: {  screen: HomeStack,
        navigationOptions: {
            drawerLabel: 'Home',
            //  drawerIcon: () => (
            //   <Ionicons
            //   name='home'
            //   size= {12}
            //   color={'black'}
            //   />)
          }},
    Setting:{screen:SettingScreen}

   },{

      initialRouteName:'HomeDrawer',
      drawerOpenRoute:'DrawerOpen',
      contentComponent:DrawerMenu,
      drawerBackgroundColor: 'orange'
      
    },{
       
  
      
    }
    
    );

   function  handleLogOut(){
      firebase.auth().signOut().then(()=> {
        this.props.navigation.navigate('Login');
      }).catch(function(error) {
        
      });
    
    }

    function DrawerMenu(props) {
  
      return (
        <SafeAreaView style={{flex:1}}>
  
        <View 
        style={{height:200,backgroundColor: 'white',alignItems:'center',
        justifyContent:'center' }}
        
        >
        <Image source={BGImage} 
        style={{height:120,width:120,borderRadius:60}}/>
        </View>
        <ScrollView>
  
          <DrawerItems {...props}/>

          <TouchableOpacity  >

            <Text style={{paddingLeft:15}}>Log Out</Text>
          </TouchableOpacity>
           

        


        </ScrollView>
        
  
      
    </SafeAreaView>
      );
    }
   








export default createAppContainer(HomeRoutes);

 