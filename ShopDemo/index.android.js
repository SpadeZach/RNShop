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
  Navigator
} from 'react-native';

// 导入外部组件
var LaunchImg = require('./Component/Main/LaunchImg.js');


export class ShopDemo extends Component {
  render() {
    return (
    	 <Navigator  
            initialRoute={{ name:'导航条', component: LaunchImg}}  
            configureScene={(route) => {  
              return Navigator.SceneConfigs.PushFromRight;  
            }}  
            renderScene={(route, navigator) => {  
              let Component = route.LaunchImg;  
              return <Component {...route.params} navigator={navigator} />  
            }}  
          />  
      <LaunchImg />
    );
  }
}

AppRegistry.registerComponent('ShopDemo', () => ShopDemo);
