import { SafeAreaView, View, FlatList,
  StyleSheet, Text,TouchableOpacity,Image,ScrollView,Dimensions,Button ,TextInput} from 'react-native';
 import Constants from 'expo-constants';
 import AntIcon from "react-native-vector-icons/AntDesign";
 import React, { useState,useEffect } from 'react';
 import * as ImagePicker from 'expo-image-picker';
 import * as Permissions from 'expo-permissions';
 import PouchDB from 'pouchdb-core';
 import Metrics from './Themes/Metrics';
//  import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
//  import {AsyncStorage} from 'react-native'
 PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
 const db = new PouchDB('mydb', {adapter: 'asyncstorage'})
  


 const Filepath ='./components/Images/Consoles';

 

 
 // headerLeft: (
 //   <Feather style={{marginLeft: 15}}
 //    name="menu"
 //    size={30}
 //    color={'#9B59B6'}
 //    onPress={()=> navigation.toggleDrawer()}
 //  />
 // ),
 
 var samsung=[
 {
   title:'Samsung AR35',
   image:  require("./Images/Consoles/Samsung/samsungAR35.jpg")             ,
   id:'AR35',
   height:100,
   width:210,
   BTU:14,
   quantity:99
 },
 {
   title:'Samsung Avant',
   image:  require("./Images/Consoles/Samsung/samsungAvant.jpg")             ,
   id:'Avant', 
   height:100,
   width:210,
   BTU:12,
   quantity:6
 },
 {
   title:'Samsung Elite',
   image:  require("./Images/Consoles/Samsung/samsungElite.jpg")             ,
   id:'Elite',
   height:100,
   width:210,
   BTU:12,
   quantity:15
 },
 {
   title:'Samsung Cebu',
   image:  require("./Images/Consoles/Samsung/samsungCebu.jpg")             ,
   id:'Cebu',
   height:100,
   width:210,
   BTU:12,
   quantity:23
 },
 {
   title:'Samsung Comfort',
   image:  require("./Images/Consoles/Samsung/samsungComfort.jpg")             ,
   id:'Comfort',
   height:100,
   width:210,
   BTU:14,
   quantity:45
 },
  
 ];
 var consoleDetails = [];
 
 var tgm =[];
 var daikin=[];
 var  lg =[];
 var toshiba=[];


  
 export default class Details extends React.Component {

   constructor(props){
 
        super(props);
  
  
  
        this.state ={
           title:'',
           loading:false,
           on:false,
           model:'',
           image: null ,
           id:'', 
           height:0,
           width:0,
           BTU:0,
           quantity:0
 
        }
       
   }
     static navigationOptions = {
 
         title: 'Consoles List',
         
          
          
         
       }; 
 
       componentDidMount(){

        var {navigation}= this.props;
        var title  =navigation.getParam('title',navigation.title);

           
        this.getPermissionAsync();

          if(title=="Samsung"){
 
            consoleDetails=samsung;
            
             
          } else if(title=="TGM"){
 
           consoleDetails=tgm;
           
          }else if(title=="Toshiba"){
 
           consoleDetails=toshiba;
 
          }else if(title=="LG"){
 
           consoleDetails=lg;
 
          }else if(title=="Daikin"){
 
           consoleDetails=daikin;
 
          }
            else{
 
             consoleDetails=[];
 
          }

           
    
          
      }
       
 
       componentWillMount( ) {
 
       
         
        var {navigation}= this.props;
        var title  =navigation.getParam('title',navigation.title);

           


          if(title=="Samsung"){
 
            consoleDetails=samsung;
            
             
          } else if(title=="TGM"){
 
           consoleDetails=tgm;
           
          }else if(title=="Toshiba"){
 
           consoleDetails=toshiba;
 
          }else if(title=="LG"){
 
           consoleDetails=lg;
 
          }else if(title=="Daikin"){
 
           consoleDetails=daikin;
 
          }
            else{
 
             consoleDetails=[];
 
          }

          
         
           
         
         
        }
       componentDidUpdate(){

        var {navigation}= this.props;
        var title  =navigation.getParam('title',navigation.title);

        
        if(title=="Samsung"){
 
          consoleDetails=samsung;
          
           
        } else if(title=="TGM"){

         consoleDetails=tgm;
         
        }else if(title=="Toshiba"){

         consoleDetails=toshiba;

        }else if(title=="LG"){

         consoleDetails=lg;

        }else if(title=="Daikin"){

         consoleDetails=daikin;

        }
          else{

           consoleDetails=[];

        }
 
          
 
       }

       getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
    
      _pickImage = async () => {

        
        try {

          const Filepath ='./components/Images/Consoles';

          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

          


          if (!result.cancelled) {
            this.setState({ image: result.uri });
             consoleDetails.push({
              image:this.state.image

             })
            
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };
            
     
         
 
 
 
     addNewConsole = () =>  {

      consoleDetails.push({
        title: this.state.title,
        height: this.state.height,
        width: this.state.width,
        id: this.state.id,
        BTU:this.state.BTU,
        quantity:this.state.quantity,
        image:this.state.image

      });
        
        
        this.setState({on:!this.state.on});

        this.setState({

          title: null,
          height: null,
          width: null,
          id: null,
          BTU:null,
          quantity:null,
          image:null

        })

    }
 
 
 
 
     // addContact = async () => {
 
     //   try{
     //     let contactsCopy = JSON.parse(JSON.stringify(this.state.contacts));
     //     if(!contactsCopy){
   
     //       contactsCopy=[];
     //     }
     //     contactsCopy.push({
     //       name: this.state.name,
     //       phoneNumber: this.state.number
     //     });
   
     //     this.setState({contacts: contactsCopy});
     //     await AsyncStorage.setItem('contacts',JSON.stringify(contactsCopy))
     //   }
        
     //    catch(error){
     //     console.log(error);
     //    }
     
     // }
  
 
 
     selectBrand = ({item}) =>{
 
         
        
         
       return (
         
               <View 
               style={styles.flatListMainContainer}
               >
                 <ScrollView
                 alwaysBounceVertical={true}
                 > 
                 
                 <TouchableOpacity 
                   style={{flex:0.2,flexDirection:'row',
                   width:'100%',borderBottomWidth:1,padding:5
                   }}
                   onPress={()=>{
                         
                     this.props.navigation.navigate('Details',{
                       title:item.title,
                       src:item.image,
                       numID:item.id,
                       height:item.height,
                       width:item.width,
                       BTU:item.BTU,
                       quantity:item.quantity,
                        
                     })
                 
                 }}
                 > 
                 <Text style={{ fontSize: 30}}> {item.id}</Text>
 
 
                   <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'
                   ,paddingRight:10}}> 
                     <AntIcon name="right" color="black" size={30} />
 
                   </View>
 
                 </TouchableOpacity>
 
               </ScrollView>
               </View>
             )
               
               
 
     }
 
 
 
   render(){


     var {navigation}= this.props;
     var url =navigation.getParam('url',navigation.url);
     
    
 
 
 
      
 
 
     if(!this.state.on){


      return (
     <SafeAreaView style={styles.container}>
      
              <View
                style={styles.componetsView}
              >
                
      
                <Image source={url}
                style={{ height:130,width:120, }}
                resizeMode={'contain'}
                />
              </View>
              
             <FlatList
               data={consoleDetails}
               renderItem={this.selectBrand }
 
         
 
               keyExtractor={item => item.id}
             />
         
             <TouchableOpacity
              style={styles.addButtonContainer}
              onPress={()=>this.setState({on:!this.state.on})}
              >
               <Image 
               
               style={{height:50,width:50}}
               source={require('./Icons/add.png')} 
               />

             </TouchableOpacity>
 
     </SafeAreaView>


             );
        } 
        else
        
        
        {
          let { image } = this.state;
              
          return( 
                      <SafeAreaView style={styles.container}>

                              <View 
                                style={styles.newConsoleContainer}
                                >

                                  <View style={{ flex:0.2,alignItems:'flex-start',marginBottom:10}}>
                                    <Text style={{fontSize:24}}> Add new console</Text>
                                  </View>
                                  <ScrollView
                                  alwaysBounceVertical={true}
                                  >            
                                  
                                      <View style={styles.textBoxView}> 

                                                <TextInput 
                                                style={styles.textBox}
                                                placeholder= 'Brand'
                                                value={this.state.title}
                                                onChangeText={lName=> this.setState({title:lName} )}
                                                >


                                                </TextInput>
                                     </View>
                                     
                                     <View style={styles.textBoxView}> 
                                                <TextInput 
                                                style={styles.textBox}
                                                placeholder= 'Serie Number'
                                                value={this.state.id}
                                                onChangeText={lName=> this.setState({id:lName} )}
                                                >


                                                </TextInput>
                                     </View>
                                     <View style={styles.textBoxView}> 
                                                <TextInput 
                                                style={styles.textBox}
                                                placeholder= 'Height'
                                                value={this.state.height}
                                                onChangeText={lName=> this.setState({height:lName} )}
                                                >


                                                </TextInput>
                                     </View>
                                     <View style={styles.textBoxView}> 
                                                <TextInput 
                                                style={styles.textBox}
                                                placeholder= 'Width'
                                                value={this.state.width}
                                                onChangeText={lName=> this.setState({width:lName} )}
                                                >


                                                </TextInput>
                                     </View>

                                     <View style={styles.textBoxView}> 
                                                <TextInput 
                                                style={styles.textBox}
                                                placeholder= 'BTU'
                                                value={this.state.BTU}
                                                onChangeText={lName=> this.setState({BTU:lName} )}
                                                >


                                                </TextInput>
                                     </View>

                                     <View style={styles.textBoxView}> 

                                                <TextInput 
                                                style={styles.textBox}
                                                placeholder= 'Quantity'
                                                value={this.state.quantity}
                                                onChangeText={lName=> this.setState({quantity:lName} )}
                                                >


                                                </TextInput>
                                     </View>

                                    <View style={styles.pickImageButton}>

                                          <Button title="Pick an image from camera roll" onPress={this._pickImage} />
                                          {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                                    </View>



                                      
                                          </ScrollView> 

                                          
                            </View>
                            <View style={{alignItems:'center'}}> 


                                  <TouchableOpacity
                                      onPress={()=> this.setState({on:!this.state.on})}
                                      >

                                            <Text style={{color:'blue'}}>Cancel</Text>

                                  </TouchableOpacity>

                                  <TouchableOpacity
                                      style={styles.buttonContainer}
                                      onPress={this.addNewConsole}
                                    >
                                                <Text style={styles.buttontext}>Add</Text>
                                  </TouchableOpacity>
                            </View>            
                      </SafeAreaView>
   )


 }
   }
 }
 



  
 const styles = StyleSheet.create({

   container: {

     flex: 1,
     marginTop: Constants.statusBarHeight,
     
   },title: {
 
     fontSize: 32,
 
   },flatlistContainer:{
 
     marginTop: Constants.statusBarHeight,
     flex:1,
     justifyContent:'center'
 
   }, labelStyle:{
 
     fontSize:400,
     paddingLeft:10,
     color:'blue'
 
 
 
   },textBox:{

    height:40,
    width:Metrics.textInputWidth, 
    paddingLeft:10,
    borderRadius:5,
    backgroundColor:'white'
 
   },textBoxView:{
    
    paddingBottom:20


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
    
    

  },pickImageButton:{

    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 

  },newConsoleContainer:{

     flex:1,
     justifyContent:'flex-end',
     alignItems:'center',
     justifyContent:'space-between'


  }, addButtonContainer:{

    alignItems:'flex-end',
    paddingRight:15,
    paddingBottom:15,
    paddingTop:5
             

  },componetsView:{

    alignItems:'center',
    height:Metrics.screenHeight/8,
    width:'100%',
    justifyContent:'flex-start',
    marginBottom:45 

  },flatListMainContainer:{
 
    flex:1,
    justifyContent:'flex-end',
    
    
    
  }


 
 });