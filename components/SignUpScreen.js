import React from 'react';
import { StyleSheet,Keyboard, Text, View ,Dimensions
  ,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import * as firebase from "firebase";
import Metrics from './Themes/Metrics';


 

export default class SignUp extends React.Component{
  constructor(props){
    super(props)

    this.state={

        email:"",
        password:"",
        firstName:'',
        lastName: '',
        phoneNumber:'',
        direction:'',
        zipCode:''
    
        }

      }

    static navigationOptions = {
        title: 'Create Account',
        
      }; 
    
      handelSignUp =()=>{
        Keyboard.dismiss();
        
        const {email,password}=this.state;
         
        
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
           
          
          this.setState({errorMessage:null });
          this.props.navigation.navigate('HomeRoute');
        })
        .catch(error =>this.setState({errorMessage:error.message}));
         


      }



 render(){ 
   
  
    return (
    <View style={styles.container}>
        

            <ScrollView 
             
            style={styles.scrollViewContainer}
            
            alwaysBounceVertical={true}
            
            > 

            <View style={styles.textInputsContainer}> 

            <TextInput 
            style={styles.textBox }
            placeholder= 'First Name'

            value={this.state.firstName}
            onChangeText={fName=> this.setState({firstName:fName} )}
            >


            </TextInput>

            <TextInput 
            style={styles.textBox }
            placeholder= 'Last Name'
            value={this.state.lastName}
            onChangeText={lName=> this.setState({lastName:lName} )}
            >


            </TextInput>
            
              


            <TextInput 
            style={styles.textBox }
            placeholder= 'Email'
            value={this.state.email}
            onChangeText={mail=> this.setState({email:mail} )}
            >


            </TextInput>

            <TextInput 
            style={styles.textBox }
            placeholder= 'Password'
            value={this.state.password}
            onChangeText={password=> this.setState({password:password} )}
            >


            </TextInput>
              
            <TextInput 
            style={styles.textBox }
            placeholder= 'Physical Address'
            value={this.state.direction }
            onChangeText={direction=> this.setState({direction:direction} )}
            >

              
            </TextInput>

             
            <TextInput 
            style={styles.textBox }
            placeholder= 'Zip Code'
            value={this.state.zipCode}
            keyboardType={'numeric'}
            onChangeText={zipcode=> this.setState({zipCode:zipcode} )}
            >

            </TextInput>

            <TextInput 
            style={styles.textBox }
            placeholder= 'Phone Number'
            value={this.state.phoneNumber}
            keyboardType={'numeric'}
            onChangeText={phonenumber=> this.setState({phoneNumber:phonenumber} )}
            >


            </TextInput>
            <View style= {{ alignItems:'center' }}> 

                <TouchableOpacity style={styles.buttonContainer} onPress={this.handelSignUp}>
                  
                  <Text style={styles.buttontext} >Create Account</Text>
              
              
                </TouchableOpacity>
                 
            </View>
            <View style={{alignItems:'center'}}>  
                 <Text style={styles.errortext}> {this.state.errorMessage} </Text>
            </View>
           
            </View>
           
             
          </ScrollView>
       
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
     
    


  },textBox:{

    height:40,
    width: Metrics.textInputWidth,
    alignItems: 'center',
    paddingLeft:10,
    borderRadius: 5,
    fontSize: 15,
    borderColor: 'black', 
    borderWidth: 1,
    marginTop:50
    
     
  },scrollViewContainer:{

    width:'100%',
    


  },textInputsContainer:{
     
    marginTop:10,
    justifyContent:'center',
    alignContent: 'center',
    alignItems:'center'
     

  },buttonContainer:{

    backgroundColor:'#e02239',
    marginTop:50,
    borderRadius:8,
    height: 50,
    width: 200,
    marginBottom:20,
    alignItems:'center', 
    
    

     


  },buttontext:{
    textAlign:'center',
    color: "#fff",
    fontWeight: 'bold',
    fontSize:20,
    marginTop:10,
    
    

  },
  errortext:{

    paddingTop:20,
     
    color:'#e02239',
    marginBottom:30,
    
    alignItems:'center'

  }

});