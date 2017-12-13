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
  TouchableOpacity,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

var HomeDeatil = require('./HomeDeatil');

var Home = React.createClass({
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{this.pushToDeatil()}}>
         <Text>Home</Text>
         </TouchableOpacity>
      </View>
    );
  },
  //跳转到二级界面
  pushToDeatil(){
    this.props.navigator.push({
      component: HomeDeatil,
      title:'详情',
      })
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

