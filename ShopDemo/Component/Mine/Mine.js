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
  ScrollView
} from 'react-native';
var MyCell = require('./CommonMyCell.js');
var MineMidView = require('./MineMidView.js');
var Mine = React.createClass({
  render(){
    return(
      <ScrollView 
        style={styles.scrollViewStyle}
      >
       <View>
          <MyCell 
            imageNamed='collect'
            leftTitle = '我的订单'
            rightTitle ='查看全部订单'
          />
          <MineMidView />
        </View>

        <View style={{marginTop:20}}>
          <MyCell 
            imageNamed='draft'
            leftTitle = '钱包'
            rightTitle ='余额￥10000'
          />
          <MyCell 
            imageNamed='like'
            leftTitle = '抵用券'
            rightTitle ='10张'
          />
        </View>
        <View style={{marginTop:20}}>
          <MyCell 
            imageNamed='card'
            leftTitle = '积分商城'
          />
        </View>
        <View style={{marginTop:20}}>
          <MyCell 
            imageNamed='new_friend'
            leftTitle = '今日推荐'
            rightImageNamed = 'me_new'
          />
        </View>
        <View style={{marginTop:20}}>
          <MyCell 
            imageNamed='pay'
            leftTitle = '我要合作'
            rightTitle ='轻松开店，招财进宝'
          />
        </View>

      </ScrollView>
    );
  }
}); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollViewStyle:{
    backgroundColor:'#e8e8e8'
  }
});

//输出组件
module.exports = Mine;