import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity,Image,Dimensions,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Metrics from './Themes/Metrics';

 

var DATA  = [
  {
    title: "Daikin",
    image: require("./Icons/consoleIcons/daikin.png"),
    id:1
  },
  {
    title: "TGM",
    image: require("./Icons/consoleIcons/TGM.png"),
    id:2
  },
  {
    title: "Samsung",
    image: require("./Icons/consoleIcons/samsung.png"),
    id:3
  },
  {
    title: "LG",
    image: require("./Icons/consoleIcons/lg.png"),
    id:4
  },
  {
    title: "Toshiba",
    image: require("./Icons/consoleIcons/toshiba.png"),
    id:5
  },
];


export default class Parts extends React.Component {
  constructor(props){

       super(props);
 
 
 
       this.state ={}
  }
    static navigationOptions = {
        title: 'Parts',
          
         
        
      }; 
  
      
      renderItem({item}){

        return(
           
          <View style={styles.flatListView}>  

                <ScrollView
                 
                alwaysBounceVertical={true}
                > 
                  <View style={styles.flatListView}> 

                    <TouchableOpacity  style={styles.iconContainer}> 


                        <Image source={item.image}
                        style={styles.imageDimensions}
                        resizeMode= 'contain'
                        />
                      
                    </TouchableOpacity>

                    
                  </View>


                </ScrollView>



          </View>



        )




      }

  render(){
    


  return (
    <SafeAreaView style={styles.container}>

          <FlatList
           data={DATA}
           renderItem={this.renderItem }
          
                  
          
           keyExtractor={item => item.id}
          />
       
    </SafeAreaView>
  );
}
}
 
const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems:'center',
    backgroundColor:'#20BDC7'

  },title: {



    fontSize: 32,



  },iconContainer:{

   
    flex:0.2,
    height:Metrics.screenHeight /4,
    width: Metrics.textInputWidth+15,
    backgroundColor:'white',
    borderRadius:5,
    marginTop: Constants.statusBarHeight,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center'



  },flatListView:{

    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%'



  },imageDimensions:{

     width: 250,
    height: 150,
  }
});