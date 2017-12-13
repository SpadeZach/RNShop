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
  Platform, //判断当前运行系统
} from 'react-native';
/**----导入外部组件类----**/
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';
var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');
//放tab  nav 对应controller
// propTypes 用来约束类型
var Main = React.createClass({

  //初始化函数(可以改变)
  getInitialState() {
    return{
      selectedTab:'home' //默认时候第一个
    }
  },

  render(){
    return(

      <TabNavigator>
        {/*----首页----*/}
        {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
        {/*----商家----*/}
        {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
        {/*----我的----*/}
        {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
        {/*----更多----*/}
        {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}


      </TabNavigator>
    );
  },

  //每一个TabBarItem
  renderTabBarItem(tabBarTitle,iconName,selectIconName,selectedTab,componentName,component,badgeText){
    return (
        <TabNavigator.Item
          title={tabBarTitle} //如果传递变量一定要加{}
          renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.iconStyle} />}
          onPress={()=>{this.setState({selectedTab:selectedTab})}}
          selected={this.state.selectedTab ===selectedTab}
          selectedTitleStyle={styles.selectedTitleStyle}
          badgeText = {badgeText}
        >

       <Navigator  
            initialRoute={{ name:componentName, component: component}}  
            configureScene={(route) => {  
              return Navigator.SceneConfigs.PushFromRight;  
            }}  
            renderScene={(route, navigator) => {  
              let Component = route.component;  
              return <Component {...route.params} navigator={navigator} />  
            }}  
          />  

        </TabNavigator.Item>
      )
  }


}); 

const styles = StyleSheet.create({
  iconStyle:{
    width:Platform.OS === 'ios' ? 30 : 25,
    height:Platform.OS === 'ios' ? 30 : 25,
  },
  selectedTitleStyle:{
    color:'orange'
  }
});

//输出组件
module.exports = Main;