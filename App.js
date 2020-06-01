import React from 'react';
import * as firebase from "firebase";
import firebaseConfig from './firebaseConfig';
import Navigation from './components/Navigation'

export default class App extends React.Component {



 componentDidMount(){

  if (!firebase.apps.length) {
    try {
        firebase.initializeApp(firebaseConfig)
         



    } catch (err) {
        console.error("Firebase initialization error raised", err.stack)
    }
  }




 }



 render(){

  return(
  <Navigation  />
  )






  
 }

} 