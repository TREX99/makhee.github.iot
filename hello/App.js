/*
 - react-native 는 react와 유사하나, 타겟이 스마트폰 등 디바이스에서
 - 네이티브로 변환해서 구동되는 방식이다 => 대상이 APP 이다.
 - React 구성 기본사항
  1) JSX
  2) Component
  3) state, props, event 처리
  4) 컴포넌트가 여러개로 구성되었을때, 컴포넌트간 통신, 이벤트 처리등 flux, redux ... 등
  5) UI 구성하는 기술 - 기본 컨테이너 구성법, 라우터를 이용한 페이징 구성
  6) network 구성법
  7) 리스트 처리
  8) stylesheet 사용법
 - 기본 컴포넌트 및 API 습득
    > 한개씪 다 돌려보는게 좋고, 맥에서(IOS) 해보면 좋다.
 - 고급 (내가 구현하고자 하는 기능이 없을 경우나, 상이할 경우)
  1) React-Native 에서 지원하지 않는 플랫폼 고유의 기능들은 개발자가 인터페이스를 개발해야한다.
     > android(java, kotiln 기반으로 해당 기능 구현할 수 있어야 한다)
     > ios(objective-c, swift를 기반으로 해당 기능 구현할 수 있어야 한다)
  2) 공통 기능으로 제공하나, ios와 android 사용 방식이 다르다, 이것을 기본 코드에서 분기 처리하는 부분
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mod from './src/TestMod';

export default class App extends React.Component {
  render() {
    return (
      <Mod/>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working your app!</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
