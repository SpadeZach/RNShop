/* 2017-12-08 by RubyJobs */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var CommonCell = React.createClass({
	getDefaultProps() {
		return{
			title:'',   //标题
		}
	},
   render(){
    return(
    	<TouchableOpacity onPress={()=>alert('点击了')}>
	      <View style={styles.container}>
	  		{/* 左边 */}
	        <Text style={{marginLeft:10}}>{this.props.title}</Text>
	    	{/* 右边 */}
	    	<Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13,marginRight:10}}/>
	      </View>
      </TouchableOpacity>
    );
  }
}); 

const styles = StyleSheet.create({
  container: {
  	height:44,
  	backgroundColor:'white',
  	borderBottomColor:'#f0f0f0',
  	borderBottomWidth:0.5,
  	flexDirection:'row',
  	//主轴对齐方式
  	justifyContent:'space-between',
  	  //垂直居中
    alignItems:'center'
  }
});

//输出组件
module.exports = CommonCell;