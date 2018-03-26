/* 2017-12-18 by RubyJobs */
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
  Image,
  TouchableOpacity
} from 'react-native';
var jsonData = require('./MineMidData.json');

var MineMidView = React.createClass({
  render(){
    return(
      <View style={styles.container}>
      	{this.renderAllItem()}
      </View>
    );
  },
  renderAllItem(){
  	//定义数组
  	var itemArr = [];
  	//遍历
  	for (var i = 0; i < jsonData.length; i++) {
  		//取出单独数据
  		var data =  jsonData[i];
  		//创建组件装入数组
  		itemArr.push(<InnerView
  		 key={i} 
  		 iconName={data.iconName}
  		 title={data.title}
  		 />);
  	}
  	//返回
  	return itemArr;

  }
}); 
//创建个类
var InnerView = React.createClass({
	getDefaultProps() {
		return{
			iconName:'',
			title:''
		}
	},
	render() {
		return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}}>
  				<View  style={styles.innerViewStyle}>
  					<Image source={{uri:this.props.iconName}} style= {{width:30,height:20,marginBottom:3}}/>
  					<Text style={{color:'gray'}}>{this.props.title}</Text>
  				</View>
        </TouchableOpacity>
  		)
	}
})

const styles = StyleSheet.create({
  container: {
  	flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent:'space-between',
  },
  innerViewStyle:{
	  width:70,
    height:70,

    // 水平和垂直居中
    justifyContent:'center',
    alignItems:'center'
  }
});

//输出组件
module.exports = MineMidView;


