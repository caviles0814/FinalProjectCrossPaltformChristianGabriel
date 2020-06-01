import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as firebase from "firebase";


export default class LoadingScreen extends React.Component
  {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
          if (user) {
          this.props.navigation.navigate('HomeRoute');
          } else {
          this.props.navigation.navigate('SignUp');
          }
      });
  }

    static navigationOptions = {
      title: null,
      headerShown: false,
    }; 

      render(){


  return (
    <View style={styles.container}>
        <Text>Loading...</Text>
     <ActivityIndicator style = 'large' color="blue"/>
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%",
    width:"100%",
    backgroundColor: 'white'
  },
  
});
 