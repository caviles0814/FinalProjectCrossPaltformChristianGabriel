import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import CreateAppointment from './createAppointment';

 

export default class AgendaScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      on:true,
      handChange:null,
      firstName:null,
      lastName: '',
      phoneNumber:'',
      direction:'',
      day:'',
      pastVal:''
    };
    
    this.handler = this.handler.bind(this);
     
  }

    handler (change,fName,lName,pNumber,dir){
      
      this.setState({
         
        on:change,
        firstName:fName,
        lastName: lName,
        phoneNumber:pNumber,
        direction:dir,
        pastVal:null
    });

     
    }

    componentWillMount(pastState ) {
      var pastState= this.state.firstName;

      this.setState({pastVal:pastState});

       
    }

    componentDidMount( ){



    }

   
 
     
     


  render() {
  
   

    if(this.state.on){
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={ this.state.firstName == null? this.loadItems.bind(this)  :this.renderNewItems.bind(this)}
        selected={'2020-05-16'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        onDayPress={(day)=>{this.setState({on:!this.state.on,day:day})}}
         
      />
      
    );
    }  else{

        
        return <CreateAppointment on = {this.handler}  />
           
        }

     

  }


  
  renderNewItems (day){


    setTimeout(() => {
        var i=0;
        
           
        
        i= i+1;
        const time = day.timestamp  
        const strTime = this.timeToString(time);
        
          this.state.items[strTime] = [];
          
           
            this.state.items[strTime].push({
              fName: this.state.firstName  ,
              lName: this.state.lastName ,
              pNumber:this.state.phoneNumber,
              dir:this.state.direction,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
         
        
      
       
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);


  }




    loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              fName: '',
              lName: '' ,
              pNumber:'',
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
       
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    
  }

  renderItem(item) {
    return (
      <View style={styles.item }>
        
            <View style={{flexDirection:'row'}}> 

                <Text>Name: </Text>


               <Text>{item.fName}{' '}{item.lName}</Text>
            
            </View>


            <View style={{flexDirection:'row'}}> 

                   <Text>Phone Number: </Text>
                   <Text>{item.pNumber}</Text>
            
            </View>

            <View style={{flexDirection:'row'}}> 

                  <Text>Direction: </Text>
                  <Text>{item.dir}</Text>

            </View>
        
        </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text style={{color:'blue'}}>Avaible</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

 

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    height:100
  },
  emptyDate: {
    height: 30,
    flex:1,
    paddingTop: 30,
    paddingLeft:5,
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop:10
  }
});