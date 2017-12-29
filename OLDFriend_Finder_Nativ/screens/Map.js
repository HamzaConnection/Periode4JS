import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView from 'react-native-maps';


export default class MyMap extends Component {
    
    constructor(props)
    {
        super(props);
        let parentProps = this.props.navigation.state.params; 
        fetch('http://61ab98ed.ngrok.io/register/' + parentProps.distance, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userName : parentProps.userName,
              coordinates : navigator.geolocation.getCurrentPosition()
            })
          }).then((reponse) => {console.log(reponse)}).catch((error) =>{
            console.error(error);
          }) 
    }

     getResponse() {
        return fetch('http://61ab98ed.ngrok.io/register/' + parentProps.distance)
          .then((response) => response.json())
          .then((responseJson) => {
            return responseJson.body;
          })
          .catch((error) => {
            console.error(error);
          });
      }

    



    render() {
        
        return (
            
            <MapView
             style = {{height : 200 , margin : 40}}
            showsUserLocation = {true}
            />
        );
    }
}
