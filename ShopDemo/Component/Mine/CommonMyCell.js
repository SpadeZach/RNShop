/* 2017-12-13 by RubyJobs */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

var MyCell = React.createClass({
	
   getDefaultProps() {
    return{
     imageNamed:'',
     leftTitle:'',
     rightTitle:'',
     rightImageNamed:''
    }
   },

   render(){
    return(
    	<TouchableOpacity onPress={()=>alert('点击了')} activeOpacity={0.5}>
	      <View style={styles.container}>
	  		{/* 左边 */}
        <View style={styles.leftViewStyle}>
          <Image source={{uri:this.props.imageNamed}} style={styles.leftImageStyle} />
          <Text style={styles.leftTitleStyle} >{this.props.leftTitle}</Text>
        </View>

        {/* 右边 */}
        <View style={styles.rightViewStyle}>
          {this.rightSubView()}

        </View>

	      </View>
      </TouchableOpacity>
    );
  },
  //右边内容
  rightSubView(){
    return(
      <View style={{flexDirection:'row',alignItems:'center'}}>
          {this.renderRightView()}
          <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13,marginRight:10}}/>
      </View>
      )
  },
  //右边具体返回值
  renderRightView(){
    if (this.props.rightImageNamed.length == 0) {
      //不返回图片
      return(
          <Text style={{marginRight:10,color:'gray'}}>{this.props.rightTitle}</Text>
        )
    }else{
      return(
          <Image source={{uri:this.props.rightImageNamed}} style={{width:24,height:13}}/>
        )
    }
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
  },
  leftViewStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  leftImageStyle:{
    //左边图片样式
    width:30,
    height:30,
    marginLeft:10,
    

  },
  leftTitleStyle:{
    marginLeft:10

  },
  rightViewStyle:{

  }
});

//输出组件
module.exports = MyCell;


