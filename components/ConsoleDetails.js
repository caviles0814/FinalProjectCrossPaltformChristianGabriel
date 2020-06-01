import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity,Image,Dimensions} from 'react-native';
import Constants from 'expo-constants';
import Metrics from './Themes/Metrics';
 


export default class Details extends React.Component {
  constructor(props){

       super(props);
 
 
 
       this.state ={

       }
  }
  static navigationOptions = {
    title: 'Details',
     
     
    
  }; 
  

  render(){
    var {navigation}= this.props;
    var title =navigation.getParam('title',navigation.title);
    var src =navigation.getParam('src',navigation.src);
    var height =navigation.getParam('height',navigation.height);
    var width  =navigation.getParam('width',navigation.width );
    var btu  =navigation.getParam('BTU',navigation.BTU );
    var id  =navigation.getParam('numID',navigation.numID );
    var quantity =navigation.getParam('quantity',navigation.quantity );
  
 
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.elementsContainer}>   
        
        <View style={styles.imageContainer}> 

                <Image source={src}
                style={{ height:Metrics.screenHeight/4,width:Metrics.textInputWidth/2, }}
                resizeMode={'contain'}
                />

        </View>
        <View 
        style={styles.detailsContainer}> 
        
        <View style={{alignItems:'center',marginTop:5}}> 
        
           <Text style={{fontSize:25 }}>{title}</Text>
          
        </View>

       <View style={{padding:5,flexDirection:'row'}}>

            <Text>Serie ID: #</Text>

            <Text>{id}</Text>
       </View>
       <View style={{padding:5,flexDirection:'row'}}>

            <Text>Model: </Text>

             <Text>{id}</Text>
             
        </View>

       
       <View style={{padding:5,flexDirection:'row'}}>

            <Text>Height: </Text>

            <Text>{height}</Text>
       </View>
        

       <View style={{padding:5,flexDirection:'row'}}>

                <Text>Width: </Text>

                <Text>{width}</Text>
        </View>

        <View style={{padding:5,flexDirection:'row'}}>

            <Text>Quantities in Store: </Text>

            <Text>{quantity}</Text>
       </View>

       <View style={{padding:5,flexDirection:'row'}}>

            <Text>BTU: </Text>

            <Text>{btu}</Text>
       </View>
        
        </View>
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
    
  },
  item: {

    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  title: {



    fontSize: 32,



  },elementsContainer:{

    flex:0.95,
    alignItems:'center',
    width: Metrics.textInputWidth+15,
    backgroundColor:'white',
    borderRadius:5,
    marginTop: Constants.statusBarHeight,
    marginBottom:10


  },imageContainer:{

     
    height: Metrics.screenHeight/4,
    width: Metrics.textInputWidth/1.5,
    backgroundColor:"white",
    marginTop: Constants.statusBarHeight,
    borderWidth:1,
    alignItems:'center'

  },detailsContainer:{

    height:Metrics.screenHeight/1.95,
    width:Metrics.textInputWidth,   
    marginTop: Constants.statusBarHeight,
    borderTopWidth:1


  }
});