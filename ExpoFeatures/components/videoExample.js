import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text  } from 'react-native';
import { Constants, Components, Video } from 'expo';

export default class VideoExample extends React.Component {
  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }
  onPressButton(){
    this.vid.presentFullscreenPlayer();
    this.vid.seek(5);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPressButton}>
        <Text style={{color: 'yellow'}}>Full Screen</Text>
        </TouchableHighlight>
        <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#rgba(0,0,0,0.9)',
  },
});