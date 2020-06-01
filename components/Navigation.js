

import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer,createSwitchNavigator } from 'react-navigation';
 
 
import LoginScreen from './LoginForm';
 
import HomeRoutes from './RoutesHome';

import SignUpScreen from './SignUpScreen';
 
 

 


const StackNav = createStackNavigator({

    Login:{screen:LoginScreen,
      navigationOptions:  {
        headerLeft: null,
        headerShown: false,
        gesturesEnabled: false
     }
    },
    HomeRoute: {screen: HomeRoutes,
      navigationOptions:  {
        headerLeft: null,
        headerShown: false,
        gesturesEnabled: false
     }
    
    },
    SignUp:{screen:SignUpScreen},
   
  
  
     
  },{
    initialRouteName: 'Login',
    
     
  });
  
  export default createAppContainer(
  
    createSwitchNavigator(
      {
  
        App:StackNav,
        
      },
      {
       initializeRouteName:'App' 
      }
  
  
    )
  
  
   )
  
   