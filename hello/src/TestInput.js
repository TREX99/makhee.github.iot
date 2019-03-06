/*
  - 글자 입력
  - 글자 입력에 대한 이벤트 처리
  - 이벤트를 처리하는 방법
  - 글자 입력 제한
*/

import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default class TestInput extends React.Component {
  constructor ( props ) {
    super ( props )
    this.state = {
      // 4개의 입력창으로부터 값을 받는 각각의 상태 변수
      text1: '',
      text2: '',
      text3: '',
      text4: ''
    }
    // 리액트가 es6를 적용하면서
    // 멤버 함수에 대한 this 바인딩을 수동으로 다시 해줘야하는 문제.

    this.onChangeTextHandler = this.onChangeTextHandler.bind(this)
  }

  onChangeTextHandler ( text ) {
    // 숫자 필터링
    const v = text.replace( /[^0-9]/g, '')

    // 로그 출력
    console.log( v )

    // 상태변화
    this.setState( { text2: v } )
  }

  onChangeTextHandler2 ( text ) {
    // 상태변화
    this.setState( { text3: text } )
  }

  render () {
    const { text1, text2, text3, text4 } = this.state

    // 멤버하수를 래핑
    const onChangeTextHandler2 = (e) => { this.onChangeTextHandler2(e) }
    const onChangeTextHandler3 = (e) => {
      this.setState( { text4: e } )
    }
    return (
      <View>
        {/* 이벤트를 붙이는 방법  1: 직접구현 */}
        <TextInput 
          style={ { backgroundColor: 'pink', height: 40, padding: 10 } }
          placeholder='아이디를 입력하세여'
          onChangeText={ text => this.setState( { text1: text } ) }/>
        <Text style= { styles.HelloText }>{ text1 }</Text>
        
        {/* 이벤트를 붙이는 방법 2: 멤버함수방식, 수사만 입력하라 */}
        <TextInput 
          style={ { backgroundColor: 'skyblue', height: 40, padding: 10 } }
          placeholder='숫자만 입력하세여'
          onChangeText={ this.onChangeTextHandler }
          value={ text2 }/>
        <Text style= { styles.HelloText }>{ text2 }</Text>

        {/* 멤버함수를 함수내 클로저 내부 함수로 래핑 */}
        <TextInput 
          style={ { backgroundColor: 'skyblue', height: 40, padding: 10 } }
          placeholder='적당히 입력하세여'
          onChangeText={ onChangeTextHandler2 }/>
        <Text style= { styles.HelloText }>{ text3 }</Text>

        {/* 이벤트 핸들러를 render */}
        <TextInput 
          style={ { backgroundColor: 'skyblue', height: 40, padding: 10 } }
          placeholder='적당히 입력하세여2'
          onChangeText={ onChangeTextHandler3 }/>
        <Text style= { styles.HelloText }>{ text4 }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  HelloText: {
    color: '#000000'
  }
  
});