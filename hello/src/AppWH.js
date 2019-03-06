import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

// 기본 베이스 공간 잡기
// 리액트 네이티브에서 가로 세로의 크기를 수치로 지정
// 단위 없다, 밀도에 관계 없다.
// 절대 수치로 설정 => 넣어보고 판단
// 폰트의 기본크기
// 전체 채우기 > flex:1, flex:2(2배)

export class AppWH extends React.Component {
  render () {
    return (
      // 상단부분 여백이 운영체계별로 상이하면 플랫폼별로 구분
      // UI 서드파트 라이브러리를 활용해서 커스터마이즈 후 사용하는것이 좀더 보편적으로 빨리 구성하는 방법
      // flexDirection : row (횡), column (종)
      // justiyContent : flex-start, center, flex-end, space-around, space-between, space-evenly
      <View style={ { 
                      flex:1, 
                      backgroundColor: 'steelblue',
                      marginTop: 24,
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                  } }>
        {/* 하나의 공간을 차지하는 단위 (줄바꿈) */}
        <View style={ { height: 150, width: 150, backgroundColor: 'red' } }></View>
        <View style={ { height: 150, width: 150, backgroundColor: 'blue' } }></View>
      </View>
    )
  }
}

export class AppWH1 extends React.Component {
  render () {
    return (
      // 상단부분 여백이 운영체계별로 상이하면 플랫폼별로 구분
      // UI 서드파트 라이브러리를 활용해서 커스터마이즈 후 사용하는것이 좀더 보편적으로 빨리 구성하는 방법
      <View style={ { flex:1, backgroundColor: 'steelblue', marginTop: 24 } }>
        <Text>1</Text>
      </View>
    )
  }
}
