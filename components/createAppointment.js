import React from 'react';
import { SafeAreaView, View, FlatList,
     StyleSheet, Text,TouchableOpacity
     ,Image,Dimensions,Button,TextInput,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import Metrics from './Themes/Metrics';

 
 

 

export default class createAppointment extends React.Component {
  constructor(props){

       super(props);
 
 
 
       this.state ={

           on:false,

           firstName:'',
           lastName: '',
           phoneNumber:'',
           direction:'',
            
       };
   
  }
    static navigationOptions = {
        title: 'Create Appointment',
          
         
        
      }; 
  
     
  render(){
    
    // {console.log(this.state.firstName)}
   

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.centralContainer}>  

          <ScrollView 
    
             
            
              alwaysBounceVertical={true}

            > 
             
            <View style={styles.headerContainer}> 
            
                    <Text style={styles.title}>New Appointment</Text>

            </View> 
    
                <View style={styles.textBoxView} >

                <TextInput 
                style={styles.textBoxContainer}
                placeholder= 'First Name'

                value={this.state.firstName}
                onChangeText={(text)=> this.setState({firstName:text} )}
                >


                </TextInput>

                </View>

                <View style={styles.textBoxView}>

                    <TextInput 
                    style={styles.textBoxContainer}
                    placeholder= 'Last Name'

                    value={this.state.lastName}
                    onChangeText={text=> this.setState({lastName:text} )}
                    >


                    </TextInput>



              </View>


              
              <View style={styles.textBoxView}>

                    <TextInput 
                    style={styles.textBoxContainer}
                    placeholder= 'Phone Number'

                    value={this.state.phoneNumber}
                    onChangeText={text=> this.setState({phoneNumber:text} )}
                    >


                    </TextInput>



                </View>

                <View style={styles.textBoxView}>

                    <TextInput 
                    style={styles.textBoxContainer}
                    placeholder= 'Direction'

                    value={this.state.direction}
                    onChangeText={text=> this.setState({direction:text} )}
                    >


                    </TextInput>



                </View>



            

            

            <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>

                <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=>
                  {

                    this.props.on(true,this.state.firstName
                      ,this.state.lastName,this.state.phoneNumber,this.state.direction);
                     
  
                  }
                }  
                >


                    <Text style={styles.buttontext}>Create</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity
                style={{paddingBottom:10}}
                onPress={()=>{

                  this.props.on(true);
                  

                }
                 }  
                >


                    <Text style={{color:'blue'}}>Cancel</Text>
                    
                </TouchableOpacity>

            </View>
           
           
          </ScrollView>
         
         </View>
          
      
           
    </SafeAreaView>
  );
}
}
 
const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems:'center',
    backgroundColor:'#20BDC7'


  }, title: {


    fontSize: 25,


  },centralContainer:{

    flex:0.9,
    width: Metrics.textInputWidth+15,
    backgroundColor:'#808683',
    borderRadius:5,
    marginTop: Constants.statusBarHeight,
    marginBottom:10,
    height:Metrics.screenHeight/1.5


  },headerContainer:{

    width:Metrics.textInputWidth+15,
    borderBottomWidth:1,
    height:Metrics.screenHeight/16,
    alignItems:'center',
    paddingTop:5,
    paddingBottom:5,
    backgroundColor: 'orange'

  },textBoxContainer:{

    height:40,
    width:Metrics.textInputWidth/1.2,
     
    paddingLeft:10,
    backgroundColor:'white',
    borderRadius:5


  },textBoxView:{

    marginTop:Constants.statusBarHeight,
    alignItems:'center',
    paddingLeft:10,
    
    

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
    
    

  }



});
