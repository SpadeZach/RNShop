/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var HomeDeatil = React.createClass({
  render(){
    return(
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>{this.popToHome()}}>
         <Text>HomeDeatil</Text>
         </TouchableOpacity>
      </View>
    );
  },
  popToHome(){
    this.props.navigator.pop();
  }
}); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

//输出组件
module.exports = HomeDeatil;

