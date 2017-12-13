/* 2017-12-08 by RubyJobs */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
/** 导入外部组件  **/
var Main = require('./Main.js');

var LaunchImg = React.createClass({
  render(){
    return(
      <Image source={{uri:'ic_lancher'} style={styles.launchImageStyle}} />
    );
  }
  	//复杂操作：定时器 
  	componentWillMount(){
  		//定时:隔2s切换到Main
  		setTimeout(()=>{
  			//页面切换
  			this.props.navigator.replace({
  				component:Main,
  			})
  		},2000);
  	}

}); 

const styles = StyleSheet.create({
  launchImageStyle:{
  	flex:1
  }
});

//输出组件
module.exports = LaunchImg;