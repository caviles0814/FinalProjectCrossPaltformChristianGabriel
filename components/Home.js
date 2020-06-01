import React from 'react';
import { StyleSheet,Button, Text, View ,Dimensions,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import Metrics from './Themes/Metrics';
 

 
var paddingIconLeft= Metrics.screenWidth<412 ? 50: 150;
var paddLft = Metrics.screenWidth>420 ? 150: 45;

 

export default class Home extends React.Component{

  constructor(props){
    super(props)

  }
   

  navigateTo = ( ) => {
    this.props.navigation.navigate('DrawerOpen'); 
}
    
      static navigationOptions = {
        title: null
         ,  headerLeft: (  ) => (
          <TouchableOpacity 
            // onPress={() => this.props.navigation.openDrawer()}
            > 
          <Icon
              style={styles.headerIcon}
              name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
              color="black"
              size={25}
                
            />
          </TouchableOpacity>
        ),
        
         
        
         
         
      }
         
        
       


    render(){ 
      
      return (
    <View style={styles.container}>

        <View style= {styles.firstRow}>

            
            <TouchableOpacity 
             
            onPress={()=>this.props.navigation.navigate('Consoles')}
            
            >
                <Image   
                style={styles.IconDimensions}
                source={require('./Icons/consoleIcon.png')}
                
                
                />
                 <Text  style={styles.textIconStyle}>Consoles</Text>
                 
            </TouchableOpacity>

            


            <TouchableOpacity 
            style= {styles.iconContainer2}
            onPress={()=>this.props.navigation.navigate('Calculator')}  
            >

                <Image   
                style={styles.IconDimensions}
                source={require('./Icons/calculateIcon.png')}
                
                
                />
                <Text  style={styles.textIconStyle}>BTU Calculator</Text>
            </TouchableOpacity>

             
             
            <TouchableOpacity 
            style= {styles.iconContainer}
            onPress={()=>this.props.navigation.navigate('Parts')}
            >
                    <Image   
                    style={styles.IconDimensions}
                    source={require('./Icons/partsIcon.png')}
                     
                    
                    />
                    <Text  style={styles.textIconStyle}>Parts</Text>
            </TouchableOpacity>


            

         </View>
         
         
         <View style= {styles.firstRow}>

                <TouchableOpacity
                style={{paddingHorizontal:-5}}
                onPress={()=>this.props.navigation.navigate('Appointments')}   >
                    <Image   
                    style={styles.IconDimensions}
                    source={require('./Icons/citasIcon.png')}
                    
                    
                    />
                    <Text  style={styles.textIconStyle} >Appointments</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style= {styles.iconContainer}
                onPress={ ()=>this.props.navigation.navigate('History')}>
                    <Image   
                    style={styles.IconDimensions}
                    source={require('./Icons/ordenesIcon.png')}
                    
                    
                    />
                    <Text style={styles.textIconStyle}>Orders</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                style= {styles.iconContainer}
                onPress={()=>this.props.navigation.navigate('Transaction')}
                >
                    <Image   
                    style={styles.IconDimensions}
                    source={require('./Icons/report.png')}
                    
                    
                    />
                   <Text style={styles.textIconStyle}>Transaction</Text>
                </TouchableOpacity>

         </View>


         

    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  firstRow:{
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    width:Metrics.textInputWidth,
    paddingTop:20,
    paddingBottom:20,
    flexDirection: 'row',
     

    
  },iconContainer:{

     
    justifyContent: 'center', 
    paddingLeft:paddingIconLeft,
    alignItems:'center'

  },IconDimensions:{

    height:Metrics.iconHeight,
    width: Metrics.iconWidth


  },headerIcon:{

    paddingLeft:10


  },textIconStyle:{

    textAlign: 'center',
    paddingTop:10,
    paddingRight:10

  },iconContainer2:{

    justifyContent: 'center', 
     paddingLeft: paddLft,
    alignItems:'center'

  }


});