
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
 
 

 const Logo =() =>{
  return (
    <View style={styles.container}>
      <Image source={require('./Images/LoginAvatar.png')} 
      style={{height:150,width:150,marginTop:20}}
      />
    </View>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default  Logo;