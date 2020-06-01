import React from 'react';
import { StyleSheet, Text,
   View,ImageBackground,
   Dimensions,TextInput
   ,ScrollView,
  TouchableOpacity  } from 'react-native';
import Images from './Themes/Images'



const { width, height } = Dimensions.get('window');
var cardContainerWidth= width*0.8;
var cardContainerHeight= height *0.5;
var headerFontSize = width > 412 ? 50:30;
var paddBottom= height < 820 ? 50:0;



export default class Appointments extends React.Component{


constructor(props){

   super(props)

   this.state={

    length: 0,
    width: 0,
    calculate:0

   }

}

    static navigationOptions = {
        title: 'BTU Calculator',
        headerMode: 'none'
      }; 


  calculate = () =>{

    
    let total = (parseInt(this.state.length)*parseInt(this.state.width))*35;
    this.setState({calculate:total})
   

  }


render(){ 
  
  return (
     
       
        <ImageBackground
        style={styles.backgroundContainer}
        source={Images.btuScreenBackground} 
        > 
           <ScrollView 
              contentContainerStyle={styles.scrollContainer}
              
             
             alwaysBounceVertical={true}
              
             > 
              <View style={styles.componentsContainer}>

             
              <View style={ styles.headerContainer}> 
                
                <Text style={styles.headerLabel}
                >Dimensions (In Feet)
                
                </Text>
              
              
              </View>

              <View style={styles.textInputsComponentsContainer}> 
                  
               

                      <Text style={styles.textLabel}>Room Length:</Text>
                      <TextInput 
                      style={styles.textInputBox}
                      placeholder={'Length'}
                      keyboardType={'numeric'}
                      value={this.state.length}
                      onChangeText={(text)=>this.setState({length:text})}

                      >

                      </TextInput>



                    <Text style={styles.textLabel}>Room Width:</Text>

                    <TextInput 
                    style={styles.textInputBox}
                    placeholder={'Width'}
                    keyboardType={'numeric'}
                    value={this.state.width}
                    onChangeText={(text)=>this.setState({width:text})}

                    >


                      
                    </TextInput>
                    
                    <Text style={styles.textLabel}>BTU necessary: </Text>

                    <View
                    style={styles.textInputBox}
                    
                     
                    
                    >
                            <Text style={{flex:1, alignItems:'flex-start',width:width*0.68}}>{this.state.calculate}</Text>

                      
                    </View>

                     
                    <View 
                    style={ styles.buttonContainer}> 
                        <TouchableOpacity style={styles.buttonBox} 
                        onPress={this.calculate}
                        >
                      
                          <Text style={styles.buttontext} >Calculate</Text>
                  
                  
                        </TouchableOpacity>
                    </View>
 

              </View>
          
          </View>

        </ScrollView>
        
      </ImageBackground>
    
     
  );
}
}
const styles = StyleSheet.create({
  
  backgroundContainer:{
     
      flex: 1,    
      alignItems: 'center',
      justifyContent: 'center',
      height:"100%",
      width:"100%"

  },scrollContainer:{

     flexGrow : 1,
     justifyContent : 'center'


  },componentsContainer:{

    
    backgroundColor: '#fff',
    width:cardContainerWidth,
    height:cardContainerHeight,
     
    flexDirection:'column',
    
    
     

  },textInputsComponentsContainer:{

    
    justifyContent:'center',
    flex:0.85,
    backgroundColor:'purple',
    paddingHorizontal:15,
    backgroundColor: '#fff',
    borderWidth:3,
    
    
     
     

  },textInputBox:{

    height:35,
    width: cardContainerWidth *0.9,
    alignItems: 'center',
    paddingLeft:15,
     
    fontSize: 15,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderBottomWidth:2 
     
    
    
 
  },textLabel:{

    paddingRight:10,
    fontSize: 25,
    alignSelf: 'flex-start'
    

  },headerLabel:{

    
   fontSize: headerFontSize,
   paddingLeft:8,
    
 

  },headerContainer:{

    justifyContent:'flex-start',
    flex:0.15,
    backgroundColor:'#728E80',
    borderTopWidth:3,
    borderRightWidth:3,
    borderLeftWidth:3

  } ,buttonBox:{
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
    
    

  },buttonContainer:{

    justifyContent:'center',
    alignItems:'center',
    flex:0.2,
    marginTop:25,
    paddingBottom:paddBottom
  }


});