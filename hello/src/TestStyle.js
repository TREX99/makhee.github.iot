/*
  스타일에 대한 기본 정책
  css를 이용하여 레이아웃 디자인 설정
  - 표기법 camel 표기법
    > backgroundColor (O) , background-color (X)
  - 스타일을 부여할떄는 컴포넌트에 종석적이라면 해당 컴포넌트가 정의된곳에 위치하는게 유리
  - 여러 컴포넌트에서 사용된다면 -> 스타일을 따로 정의하는게 유리
*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StylesCommon } from './CommonStlye';


export default class TestStyle extends React.Component {
  render () {
    const { basicFont, basicView } = StylesCommon
    return (
      <View style={ basicView }>
        <Text style={ basicFont }>Hello World</Text>
      </View>
    )
  }
}
