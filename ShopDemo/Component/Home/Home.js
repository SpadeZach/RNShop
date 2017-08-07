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
  View
} from 'react-native';

var Home = React.createClass({
  render(){
    return(
      <View style={styles.container}>
         <Text>Home</Text>
      </View>
    );
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
module.exports = Home;

