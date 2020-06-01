
import React from 'react';
import { StyleSheet,Platform, Text, View,ImageBackground,
  TouchableOpacity,Image ,TextInput , Dimensions,Keyboard,
  KeyboardAvoidingView} from 'react-native';
import * as firebase from "firebase";
import Icon from 'react-native-vector-icons/AntDesign';
import BGImage from './Images/LoginBackground.jpg'; 
import Metrics from './Themes/Metrics';

 


var keyboardVerticalOffset = Platform.OS === 'ios' ? 150 : 0;

 export default class LoginForm extends React.Component{
  constructor(props){
    super(props)

    this.state={
      email:"",
      password:"",
      errorMessage:null,
      loading:false
         }
  }

  componentDidMount(){

    this.setState({loading:false})
  }


  static navigationOptions = {
    title: 'Login',
     
    
  }; 
  handleLogin =()=>{
    Keyboard.dismiss();
    this.setState({loading:true});
    const {email,password}=this.state;
     
    
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
       
      
      this.setState({errorMessage:'',loading:false,email:'',password:''});
       
      this.props.navigation.navigate('HomeRoute');
    })
    .catch(error =>this.setState({errorMessage:error.message}));
     
        

         
       

        

  }
  handleSignUp = () =>{
     

    this.props.navigation.navigate('SignUp');


    
  }

  render(){
   


  return (
    <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ?"padding":null } 
        style={styles.container}
    > 
     
        <ImageBackground
            style={styles.container}
            source={BGImage} 
        >

       
       
       
        <View style={styles.logoContainer}> 
            
          <Image source={require('./Images/LoginAvatar.png')} 
            style={{height:150,width:150,marginTop:20}}
                                                      />
        </View>

        
        
         

    <View style={styles.emailAndPassword}> 
             
            <View 
            style= {{  
            justifyContent:'center' }}
            >  
                            
                <Text style={styles.errorText}  >
                  {this.state.errorMessage }
                </Text>
                
            </View>  
             
            <TextInput 
            
              placeholder="email@example.com"
              style={styles.input} 
              value={this.state.email}
              autoCapitalize= 'none'
              onChangeText={email=> this.setState({email:email})}
            />
              {/* <Icon
              style={styles.headerIcon}
              name={ 'mail'}
              color='#e02239'
              size={25}
               
            /> */}
               

              

            <TextInput placeholder="Password"
              style={styles.input}
              value={this.state.password}
              
              
              secureTextEntry={true}
              onChangeText={password=> this.setState({password:password})}
            />
            {/* <Icon
              style={styles.headerIcon}
              name={ 'lock'}
              color='#e02239'
              size={25}
               
            /> */}
         

            <TouchableOpacity style={styles.buttonContainer}
              onPress={this.handleLogin}
              // this.state.errorMessage == null ?this.props.navigate('App'):null;
            
            >
                  <Text style={styles.buttontext}>Sign In</Text>
              </TouchableOpacity>
              
      
            
            <TouchableOpacity style={{height: 50, width: 200,alignItems: 'center',justifyContent: 'center',}} 
             onPress={ this.handleSignUp}
            > 
            
              <Text style={{color :'white'}}> 
                Yo have account? <Text style={{color :'#e02239'}}>Sign Up </Text>
              </Text>
            </TouchableOpacity>


                  
        </View>


      </ImageBackground>
     
    </KeyboardAvoidingView>
  );
  };
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%",
    width:"100%"
  },
  logoContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailAndPassword:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  input:{

    height:40,
    width:   Metrics.textInputWidth,
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft:10,
    borderRadius: 5,
    fontSize: 15,
     
    borderColor: 'white', 
    borderWidth: 1,
    padding: 5,
    paddingHorizontal:20,
    marginTop:20,
     
    backgroundColor:'white'
  },
  errorText:{
    fontSize:15,
    color:'white',
     
    marginBottom:15,
     
     
     
     

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
    width: 100,
  },textInputKeyboardResponse:{
    flex: 1,
    justifyContent: 'space-between',

  }

});
 