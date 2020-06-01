
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Dimensions,Keyboard} from 'react-native';
// import * as firebase from 'firebase';
import Metrics from './Themes/Metrics';



const wHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
var wWidth = ScreenWidth<412 ?ScreenWidth *0.80: ScreenWidth *0.60;
 

export default class EmailAndPassword extends React.Component {


    state={
        email:"",
        password:"",
        errorMessage:null,
        loading:false
    }
 
  // handleLogin =()=>{

  //   const {email,password}=this.state;

  // firebase.auth().signInWithEmailAndPassword(email,password).catch(error =>this.setState({errorMessage:error.message}));

  // }
 

render(){
//  const {navigate} = this.props.navigation;
  return (
     
    <View style={styles.container} >

      { this.state.errorMessage && <Text style={{color:'white',marginBottom:15,
        marginTop:30}}>{this.state.errorMessage}</Text>}

       <TextInput placeholder="Email"
        style={styles.input} 
        value={this.state.email}
        autoCapitalize= 'none'
        onChangeText={email=> this.setState({email:email})}
       />

        <View>
            <Text> </Text>
        </View>

        

       <TextInput placeholder="Password"
        style={styles.input}
        value={this.state.password}
         
        
        secureTextEntry={true}
        onChangeText={password=> this.setState({password:password})}
       />
      
         

       <TouchableOpacity style={styles.buttonContainer}
         onPress={()=>alert('Hello')}
        // this.state.errorMessage == null ?this.props.navigate('App'):null;
       
       >
            <Text style={styles.buttontext}>Sign In</Text>
        </TouchableOpacity>
         
 
       
     <TouchableOpacity style={{height: 50, width: 200,alignItems: 'center',justifyContent: 'center',}} > 
      
      <Text style={{color :'white'}}> 
        Yo have account? <Text style={{color :'#e02239'}}>Sign Up </Text>
       </Text>
     </TouchableOpacity>
            
    
  
         
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    
  },
  input:{

    height:40,
    width: Metrics.textInputWidth,
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft:10,
    borderRadius: 5,
    fontSize: 15,
     
    borderColor: 'white', 
    borderWidth: 1,
    padding: 5,
    paddingHorizontal:20,
     
    backgroundColor:'white'
  },
  errorText:{
    fontSize:15,
    color:'white',
    alignSelf:"center",
    marginTop:10,
     

  },
  buttontext:{
    textAlign:'center',
    color: "#fff",
    fontWeight: 'bold',
    fontSize:20,
    marginTop:10

  },
  buttonContainer:{
    backgroundColor:'#e02239',
    marginTop:15,
    borderRadius:8,
    height: 50,
    width: 100
  }
});
 