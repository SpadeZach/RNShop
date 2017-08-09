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
        <TabNavigator.Item
          title="首页"
          renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle} />}
          onPress={()=>{this.setState({selectedTab:'home'})}}
          selected={this.state.selectedTab ==='home'}
        >

       <Navigator  
            initialRoute={{ name: '首页', component: Home }}  
            configureScene={(route) => {  
              return Navigator.SceneConfigs.PushFromRight;  
            }}  
            renderScene={(route, navigator) => {  
              let Component = route.component;  
              return <Component {...route.params} navigator={navigator} />  
            }}  
          />  

        </TabNavigator.Item>


        {/*----商家----*/}
        <TabNavigator.Item
        title="商家"
          renderIcon={() => <Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle} />}
          onPress={()=>{this.setState({selectedTab:'shop'})}}
          selected={this.state.selectedTab ==='shop'}
          >
          <Navigator  
            initialRoute={{ name: '商家', component: Shop }}  
            configureScene={(route) => {  
              return Navigator.SceneConfigs.PushFromRight;
            }}  
            renderScene={(route, navigator) => {  
              let Component = route.component;  
              return <Component {...route.params} navigator={navigator} />  
            }}  
          /> 
        </TabNavigator.Item>


        {/*----我的----*/}
        <TabNavigator.Item
        title="我的"
          renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyle} />}
          onPress={()=>{this.setState({selectedTab:'mine'})}}
          selected={this.state.selectedTab ==='mine'}
          >
         
          <Navigator  
              initialRoute={{ name: '我的', component: Mine }}  
              configureScene={(route) => {  
                return Navigator.SceneConfigs.PushFromRight; 
              }}  
              renderScene={(route, navigator) => {  
                let Component = route.component;  
                return <Component {...route.params} navigator={navigator} />  
              }}  
            />  
          
        </TabNavigator.Item>


        {/*----更多----*/}
        <TabNavigator.Item title="更多"
          renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.iconStyle} />}
          onPress={()=>{this.setState({selectedTab:'more'})}}
          selected={this.state.selectedTab ==='more'}
          >
           <Navigator  
            initialRoute={{ name: '更多', component: More }}  
            configureScene={(route) => {  
              return Navigator.SceneConfigs.PushFromRight;
            }}  
            renderScene={(route, navigator) => {  
              let Component = route.component;  
              return <Component {...route.params} navigator={navigator} />  
            }}  
          />  
          
        </TabNavigator.Item>


      </TabNavigator>
    );
  }
}); 

const styles = StyleSheet.create({
  iconStyle:{
    width:Platform.OS === 'ios' ? 30 : 25,
    height:Platform.OS === 'ios' ? 30 : 25,
  }
});

//输出组件
module.exports = Main;