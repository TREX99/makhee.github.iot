// 1. 모듈 가져오기
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldApp from './Hello';
import MyImage from './MyImage';
import BApp, { A } from './TestState';
import TestInput from './TestInput';
import { AppWH, AppWH1 } from './AppWH';
import TestStyle from './TestStyle';
import AppScroll from './AppScroll';
import AppNetwork from './AppNetwork';
import TestTouch from './TestTouch';
import SearchBox from './TestApp/SearchBox';
import ContentsBox from './TestApp/ContentsBox';
import AppSearchView from './AppSearchView';

// 2. 사용자 정의 컴포넌트
export default class Mod extends React.Component {
  render () {
    const imgSrc = 'https://vignette.wikia.nocookie.net/pokemon/images/c/cf/%EC%A7%80%EC%9A%B0%EC%9D%98_%EC%9D%B4%EC%83%81%ED%95%B4%EC%94%A8.png/revision/latest?cb=20171008072655&path-prefix=ko'
    return (
      // JSX
      /*
        - 용도 : HTML 형태로 화면을 구성하는 파트
        - 조건 : 반드시 root element 가 있어야한다.
                 단독 태그시 반드시 <단독태그/> 닫기 처리
                 JSX가 복잡하면 ()로 감쌀수 있다.
                 속성값은 { 변수 } 형태를 취하는데, 사용하면서 확인
      */
      // VIEW 내부에 주제별 컴포넌트를 하나씩 만들어서 계쏙 추가하면서
      // 기본 사항을 습득
      // 1. 기본형 컴포넌트 HelloWorldApp
      // 2. props 기능을 이용한 컴포넌트 => 컴포넌트의 속성을 통해
      //    컴포넌트 내부로 데이터를 전달하는 기능.
      // <View style={ styles.container }>
      //   {/* <HelloWorldApp/>
      //   <MyImage title='이상해씨' src={imgSrc}/> */}
      //   {/* state 사용 예 */}
      //   {/* <A/> */}
      //   {/* <BApp/> */}
      // <TestInput/>
      // </View>
      // <AppWH/>
      // <TestStyle/>
      // <AppScroll/>
      // <AppNetwork/>
      <TestTouch/>
      // <AppSearchView/>
      // <View style={ styles.container }>
      //   <SearchBox/>
      //   <ContentsBox/>
      // </View>
    )
  }
}

// 3. 스타일시트
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    marginTop: 24
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
