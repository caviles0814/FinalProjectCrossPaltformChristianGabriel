import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity,Image,Dimensions,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AntIcon from "react-native-vector-icons/AntDesign";
import Metrics from './Themes/Metrics';

 

 

var details =[

  {
    firstName: 'chris',
    id:1
  },
  
  {
    firstName: 'miguel',
    id:2
  },
  {
    firstName: 'aviles',
    id:3
  },




];
 
export default class HistoryOrders extends React.Component {
  constructor(props){

       super(props);
 
 
 
       this.state ={

          
        firstName:'',
        lastName:'',
        phoneNumber:'',
        typeOfService:'',
        direction:'',
        console:'',
        serviceCost:'',
        on:false,
        id:''


       }
  }
    static navigationOptions = {

        title: 'History Orders',
         
         
        
      }; 


      componentDidMount(){

        var {navigation}= this.props;
        var firstName =navigation.getParam('firstName',navigation.firstName);
        var lastName =navigation.getParam('lastName',navigation.lastName);
        var phoneNumber =navigation.getParam('phoneNumber',navigation.phoneNumber);
        var direction =navigation.getParam('direction',navigation.direction);
        var console =navigation.getParam('console',navigation.console);
        var serviceCost  =navigation.getParam('serviceCost',navigation.serviceCost);
        var typeOfService  =navigation.getParam('typeOfService',navigation.typeOfService);
        var date =navigation.getParam('date',navigation.date);

        const min = 1;
        const max = 500;
        var rand = min + Math.random() * (max - min);
        var randID =  parseInt( rand+ Math.random()) ;

           if(firstName!=null){ 

           details.push({
              firstName:firstName,
              lastName: lastName,
              phoneNumber:phoneNumber,
              typeOfService: typeOfService,
              direction: direction,
              console: console,
              serviceCost: serviceCost,
              id:randID, 
              date:date
             });
          
            }
          
      }

      renderItem =({item})=>{


          return(
                     <ScrollView 
                      style={{width:'100%'}}
                      alwaysBounceVertical={true}
                      > 

                            <TouchableOpacity
                            onPress={()=>{
                              
                              this.setState({firstName:item.firstName,lastName:item.lastName,
                              phoneNumber:item.phoneNumber,direction:item.direction,serviceCost:item.serviceCost,
                              date:item.date
                              })
                              this.setState({on:!this.state.on})
                            
                            
                            }}
                            style={styles.box}> 
                               
                                 <Text style={styles.labelStyle}>#{item.id}</Text>
                                   
                                 <View style={styles.rightIconContainer}> 
                                    <AntIcon name="right" color="black" size={30} />
                                 </View>
                                  
                               


                               
                            </TouchableOpacity>
                    
                    </ScrollView>
          )

      }

      renderDetails = ({item})=>{

        return(<View style={{flex:1}}>

              <Text>{item.firstName}</Text>



        </View>)



      }


  render(){
    
    var {navigation}= this.props;
    var firstName =navigation.getParam('firstName',navigation.firstName);
     
    

        if(this.state.on==false){
       return (
     
             
              <SafeAreaView style={styles.container}>
                

                              <FlatList
                                data={details}
                                renderItem={this.renderItem }
                  
                          
                  
                                keyExtractor={item => item.id}
                              />
            
        	      <View style={{flex:1,justifyContent:'center'}}> 
                 
                </View>

              </SafeAreaView>
              




  );

       }
       else{

          return (
          
          <View style={styles.detailsContainer}>

             

              <View style={styles.detailsHeaderContainer}>

                  <Text style={styles.headerLabel}>Date: </Text>
                  
                   
                   

                   <Text style={styles.headerLabel}>           {this.state.date}</Text>

              </View>

              <View style={ styles.bodyContainer}  >

                    <View style={styles.detailsLabelContainer}>

                          <Text style={styles.detailsLabel}>First Name: </Text>
                          <Text  style={styles.detailsLabel}>{this.state.firstName} </Text>

                    </View>

                    <View style={styles.detailsLabelContainer}>

                          <Text style={styles.detailsLabel}>Last Name: </Text>
                          <Text  style={styles.detailsLabel}>{this.state.lastName} </Text>

                    </View>

                    <View style={styles.detailsLabelContainer}>

                          <Text style={styles.detailsLabel}>Phone Number: </Text>
                          <Text  style={styles.detailsLabel}>{this.state.phoneNumber} </Text>

                    </View>

                    <View style={styles.detailsLabelContainer}>

                          <Text style={styles.detailsLabel}>Direction: </Text>
                          <Text  style={styles.detailsLabel}>{this.state.direction} </Text>

                    </View>

                    <View style={styles.detailsLabelContainer}>

                          <Text style={styles.detailsLabel}>Total Cost: </Text>
                          <Text  style={styles.detailsLabel}>{this.state.serviceCost} </Text>

                    </View>

                    <View style={styles.detailsLabelContainer}>

                          <Text style={styles.detailsLabel}>Type of Service: </Text>
                          <Text  style={styles.detailsLabel}>{this.state.typeOfService}</Text>

                    </View>
                         

              </View>
             
             
              



            
            <TouchableOpacity
            onPress={()=>this.setState({on:!this.state.on})}
            style={styles.backButtonContainer}
            >                    
            <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
           
                  
          </View>
          )
       }
}
}
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    
    
  }, flatlistContainer:{

    marginTop: Constants.statusBarHeight,
    flex:1,
    justifyContent:'center'

  }, labelStyle:{

    fontSize:25,
    paddingLeft:10,
   
  },box:{

    flex:1,
    height:45,
    width: Metrics.screenWidth,
    flexDirection:'row',
    justifyContent:'center', 
    paddingLeft:10,
    backgroundColor:'white',
    borderTopWidth:1,
    

  },rightIconContainer:{

    flex:1,
    alignItems:'flex-end',
    justifyContent:'center'


  },detailsContainer:{

    flex:1,
    alignItems:'flex-start'

  },detailsComponentsContainer:{

    flex:1,
    backgroundColor:'red',
    height:Metrics.screenHeight,
    width:'100%',
    backgroundColor:'red',
    justifyContent:'center'

  },detailsHeaderContainer:{

    flex:0.15,
    backgroundColor:'red',
    height:Metrics.screenHeight/16,
    width:'100%',
    backgroundColor:'white',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    paddingLeft:10,
    borderBottomWidth:1

},headerLabel:{

  fontSize:30

},bodyContainer: {

  flex:1,
  backgroundColor:'red',
  height:Metrics.screenHeight/8,
  width:'100%',
  backgroundColor:'white',
  justifyContent:'flex-start',
  alignItems:'flex-start',
  paddingLeft:10,
  borderBottomWidth:1,
  

  },detailsLabelContainer:{

    marginTop: Constants.statusBarHeight,
    flexDirection:'row'
  
  },detailsLabel:{

    fontSize:25

  },backButtonContainer:{

    flex:0.1,
    justifyContent:'center',
    width:'100%',
    borderBottomWidth:1,
    backgroundColor:'white',
    paddingLeft:10

  },backButtonText:{
    
    color:'blue',
    fontSize:20
  }


});