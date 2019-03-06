/*
  React의 구성요소중 state 이해
  - 정의 및 초기화 : 생성자
  - 사용 : 주로 render()에서 사용함, 다른곳에서도 사용은 가능
  - 변경(업데이트) : 이벤트 처리하는 구간, 정해진곳은 없다.
    > render() 가 호출된다 => 화면이 변경된다
    > 차후, 컴포넌트의 라이프사이클을 확인
*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 현재시간 시:분:초를 표현하는 컴포넌트
export class A extends React.Component {
  constructor (props) {
    super(props)
    // state 초기화
    this.state = {
      // key : value
      curTime: new Date()
    }

    setInterval( () => {
      this.setState( { curTime: new Date() } )
    }, 1 * 1000 )
  }

  render () {

    // 시간 계산
    const { curTime } = this.state
    let h = curTime.getHours()
    let m = curTime.getMinutes()
    let s = curTime.getSeconds()
    const timeStr = `${h}:${m}:${s}`

    return (
        <Text style= { styles.HelloText }>{ timeStr }</Text>
    )
  }
}

// B 컴포넌트 구성
// 0.5 초 단위로 텍스트를 보이게/안보이게 처리
// 텍스트는 <B value='text'/>

class B extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShow:true
    }

    setInterval( () => {
      // this.setState( { isShow:!this.state.isShow } )
      // 이전 값을 받아서 처리할수 있는 콜백 등록
      this.setState( pre => ( { isShow:!pre.isShow } ) )
    }, 0.5 * 1000) 
  } 

  render() {
    const { value } = this.props
    const { isShow } = this.state
    if ( !isShow ) {
      return null
    }

    return (
      <Text>{ value }</Text>
    )
  }
}


// 이런 B 컴포넌트를 포함한 BApp 이라는 컴포넌트를 구성
// BApp은 대표 모듈임

export default class BApp extends React.Component {  
  render() {    
    return (
      <B value='NCIA'/>
    )
  }

}

const styles = StyleSheet.create({
  HelloText: {
    color: '#000000'
  }
});