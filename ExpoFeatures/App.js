import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import CameraExample from './components/cameraExample';
import VideoExample from './components/videoExample';
import ImagePickerExample from './components/imagePicker';

const Touchable = (props) => (
 <TouchableOpacity style={styles.button} onPress={props.onPress}>
   <Text style={styles.buttonText}>{props.title}</Text>
 </TouchableOpacity>)

class HomeScreen extends React.Component {
 static navigationOptions = { title: 'Day1 Tutorial' };
 render() {
   const { navigate } = this.props.navigation;
   return (
     <ScrollView>
     <View >
       <Text style={{ textAlign: "center", fontSize: 20 }}>Main</Text>
       <Touchable onPress={() => navigate('CameraExample')} title="CameraExample" />
       <Touchable onPress={() => navigate('VideoExample')} title="VideoExample" />
       <Touchable onPress={() => navigate('ImagePickerExample')} title="ImagePickerExample" />
     </View>
     </ScrollView>
   )
 }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
 Home: { screen: HomeScreen },
 CameraExample: { screen: CameraExample },
 VideoExample: { screen: VideoExample },
 ImagePickerExample: { screen: ImagePickerExample }

});

const styles = StyleSheet.create({
 button: {
   margin: 3,
   alignItems: 'center',
   backgroundColor: '#2196F3'
 },
 buttonText: {
   padding: 7,
   fontSize: 18,
   fontWeight: "bold",
   color: 'white'
 }
})
