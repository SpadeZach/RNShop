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
  Image,
  Platform,
  ScrollView
} from 'react-native';
/** 引入外部组件 **/
var CommonCell = require('./CommonCell');
var More = React.createClass({
  render(){
    return(
      <View style={styles.container}>
      {/* 导航条 */}
        {this.renderNavBar()}
        <ScrollView>
          <View style={{marginTop:15}}>
            <CommonCell 
            title='扫一扫'
            />
          </View>

        </ScrollView>
      </View>
    );
  },
  //导航条
  renderNavBar(){
    return(
        <View style={styles.navOutViewStyle}>
            <Text style={{color:'white',fontSize:16,fontWeight:'bold',marginTop:10}}>更多</Text>
            <TouchableOpacity onPress={()=>{alert('点击了')}} style={styles.rightViewStyle}>
              <Image source={{uri:'icon_mine_setting'}} style={styles.navImgStyle}/>
            </TouchableOpacity>
        </View>
      )
  }
}); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  navImgStyle:{
    width:Platform.OS== 'ios' ? 28 :24,
    height:Platform.OS== 'ios' ? 28 : 24,
   
  },
  rightViewStyle:{
    //绝对定位
    position:'absolute',
    right:10,
    bottom:15
  },
  navOutViewStyle:{
    //导航条样式
    height:Platform.OS== 'ios' ? 64 :44,
    backgroundColor:'rgba(225,96,0,1.0)',
    //设置主轴方向
    flexDirection:'row',
    //垂直居中（设置侧轴方向）
    alignItems:'center',
    //设置主轴对齐方式
    justifyContent:'center'

  }
});

//输出组件
module.exports = More;