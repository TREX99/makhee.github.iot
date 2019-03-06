/*
  - 버튼에 이벤트 등록하여 처리
*/
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { StylesCommon } from './CommonStlye';

export default class TestTouch extends React.Component {
  onBtnPress = () => {
    Alert.alert( '검색중...' )
  }

  onLongPress = () => {
    Alert.alert( '길게 눌렀다.' )
  }

  render () {
    const { basicFont, basicView } = StylesCommon
    return (
      <View style = { { padding:50, alignItems: 'center',  } }>
        <Text style = { basicFont }>TEST STYLE</Text>
        <View style = { style.btn }>
          <Button 
            style = { style.btn }
            title = 'click'
            onPress = { this.onBtnPress }
          />
        </View>

        <View style = { style.btn }>
          <Button 
            title = 'click2'
            color = '#FF00DD'
            onPress = { this.onBtnPress }
          />
        </View>
        {/* 피드백이 존재하는 프레스:안드로이드만 존재 */}
        <TouchableNativeFeedback 
          onPress = { this.onBtnPress }
          onLongPress = { this.onLongPress }
        >
          <View style = { style.btn }>
            <Text>피드백 존재 버튼</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableHighlight 
          onPress = { this.onBtnPress }
          onLongPress = { this.onLongPress }
          underlayColor = 'red'
        >
          <View style = { style.btn }>
            <Text>하이라이트 버튼</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity
          onPress = { this.onBtnPress }
          onLongPress = { this.onLongPress }
        >
          <View style = { style.btn }>
            <Text>TouchableOpacity 버튼</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}


const style = StyleSheet.create({
  btn: {
    padding: 20,
    backgroundColor: '#E5D85C'
  }
})