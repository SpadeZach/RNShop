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
  TextInput,
  Image,
  Platform,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

var HomeDeatil = require('./HomeDeatil');

var Dimensions = require('Dimensions');

var {width,height} = Dimensions.get('window');

var Home = React.createClass({
  render(){
    return(
      <View style={styles.container}>
        {/* 导航条 */}
        {this.renderNavBar()}

        <TouchableOpacity onPress={()=>{this.pushToDeatil()}}>
         <Text>Home</Text>
         </TouchableOpacity>
      </View>
    );
  },

  //导航条
  renderNavBar(){
    return(
      <View style={styles.navBarStyle}>
        {/* 左边 */}
        <TouchableOpacity onPress={()=>{alert('点击了')}}>
        <Text style={{color:'white'}}>大连</Text>
        </TouchableOpacity>
        {/* 中间 */}
        <TextInput
          placeholder = "输入商家，品类，商圈"
          style = {styles.topInputStyle}
        />
        {/* 右边 */}
        <View style={styles.rightNavViewStyle}>
          <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <Image  source={{uri:'icon_homepage_scan'}}  style={styles.navRightImgStyle}/>
          </TouchableOpacity>
        </View>
      </View>
    )
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
    backgroundColor: '#e8e8e8',
  },
  navBarStyle:{
    //导航条样式
    height:Platform.OS== 'ios' ? 64 :44,
    backgroundColor:'rgba(225,96,0,1.0)',
    //设置主轴方向
    flexDirection:'row',
    //垂直居中（设置侧轴方向）
    alignItems:'center',
    //设置主轴对齐方式
    justifyContent:'space-around'
  },
  topInputStyle:{
    //设置输入框
    width:width*0.73,
    height:35,
    backgroundColor:'white',
    marginTop:Platform.OS== 'ios' ? 18 : 0,
    //设置圆角
    borderRadius:17,
    //内左边距
    paddingLeft:10,
    paddingRight:10
  },
  rightNavViewStyle:{
    //右侧2个小图片父级
    flexDirection:'row',
    // backgroundColor:'red',
    height:64,
    //侧轴对齐
    alignItems:'center',
  },
  navRightImgStyle:{
    //设置图片大小
    width:Platform.OS== 'ios' ? 28 :24,
    height:Platform.OS== 'ios' ? 28 : 24
  }

});

//输出组件
module.exports = Home;

