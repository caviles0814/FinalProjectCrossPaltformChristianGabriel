import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import LoginScreen from './LoginForm';
import * as firebase from "firebase";




export default class Appointments extends React.Component{
    static navigationOptions = {
        title: 'Setting',
        
        
      }; 

 handleLogOut= () =>{
  firebase.auth().signOut().then(()=> {
    this.props.navigation.navigate('Login');
  }).catch(function(error) {
    
  });

}

render(){ 
  return (
    <View style={styles.container}  >
      <Text>Setting</Text>
      <TouchableOpacity onPress={this.handleLogOut}>

      <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});