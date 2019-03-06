/*
  리액트 컴포넌트 상에서 JSX기술할때
  속성값으로 데이터를 전달하면 컴포넌트 내부의 기본속성(멤버변수)중
  props 라는 변수에 데이터가 전달이 된다.
  전달된 데이터는 값, 객체, 함수도 가능함.

  사용법
  => 사용
  this.props.속성의 이름
  => 변경 안됨(readonly)
*/
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class MyImage extends React.Component {
  render () {
    // 수행문 작성 공간

    const img_url = {
      uri : this.props.src
    }

    return (
      <View>
        <Image source={ img_url } style={{width:320, height:100}} />
        <Text> { this.props.title } </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  HelloText: {
    color: 'red'
  }
});