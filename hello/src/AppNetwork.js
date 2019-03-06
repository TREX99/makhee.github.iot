/*
  - kakao api 를 이용한 통신 테스트
*/

import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ActivityIndicator, // 로딩처리
  FlatList // 통신후 리스트
 } from 'react-native';
import { StylesCommon } from './CommonStlye';

export default class AppNetwork extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      // 통신중인가? 아닌가?
      isNetworking: true,
      // 최초 로딩 화면에 해당 상태값을 사용하면 설정한다.
      // 아니라면 비워도 상관없다. =>  state 멤버들은 나중에 추가 가능하다.
      // resData: null  
    }

    const url = 'http://facebook.github.io/react-native/movies.json'
    getMovieFormApi ( url,  ( err, jsonData ) => {
      if( err ) {
        // 통신 실패
        console.log( '통신실패 : ', err )
      } else {
        // 통신 성공
        console.log( '통신성공 : ', jsonData )
      }
    } )

    const url2 = 'https://dapi.kakao.com/v2/search/image?query=설현&sort=recency'
    getKakaoApi  ( url2,  ( err, jsonData ) => {
      if( err ) {
        // 통신 실패
        console.log( '통신실패 : ', err )
      } else {
        // 통신 성공
        console.log( '통신성공 : ', jsonData )
      }
    } )
  }

  // 컴포넌트가 마운트(화면에 보인다) 되었다.
  componentDidMount() {
    // 통신 (시작하자마자 통신하고 싶다면 -> 화면을 먼저 보이고 -> 그다음 통신)
    const url = 'http://facebook.github.io/react-native/movies.json'
    fetch( url )
    // 응답 데이터(텍스트)를 json 객체로 변환
    .then( ( res ) => res.json() )
    // json 형태로 데이터가 왔다 => 파싱 => state 갱신 (화면갱신)
    .then( ( resJson ) => {
      // console.log( resJson )
      this.setState( {
        isNetworking: false,
        // 필요한 시점에 state를 생성하면 세팅할수 있다.
        resData: resJson
      } )
    } )
    .catch( ( err ) => {
      console.log( '에러 : ' , err)
    })
  }



  render () {
    // 통신중일떄 => 로딩
    const { isNetworking } = this.state
    const { basicView, basicCenter } = StylesCommon

    if( isNetworking ) {
      return (
        <View style={ basicView }>
          <View style={ basicCenter}>
            <ActivityIndicator/>
            <Text>통신중</Text>
          </View>
        </View>
      )
    }


    const onRenderItem = ( { item } ) => {
      return (
        // JSX
        <Text>{ item.releaseYear } / { item.title }</Text>
      )
    }

    // 통신후     => 결과물
    return (
      <View style={ basicView }>
        <FlatList
          data={ this.state.resData.movies }
          renderItem={ onRenderItem }
          keyExtractor={ ( item, index ) => `${index}` }
        />
      </View>
    )
  }
}

// async ~ await
async function getMovieFormApi ( url,  cb ) {
  try{
    let response = await fetch( url )
    // response.json() 이부분은 비동기 상황이 아니다.
    // 굳이 await 안해도 된다
    let resJson  = await response.json()
    cb ( null, resJson )
  } catch ( err ) {
    // 통신 실패
    cb ( err, '통신실패' )
  }
}

// 파라미터
// 헤더 정보 설정
export async function getKakaoApi ( url,  cb ) {
  try{
    let response = await fetch( url, {
      method: 'get',
      headers: new Headers({
        Authorization: 'KakaoAK d28636a841a3efce7e6f9c422b39ad35',
        // body= 'key=value&key2=value2'
      })
    } )
    // response.json() 이부분은 비동기 상황이 아니다.
    // 굳이 await 안해도 된다
    let resJson  = await response.json()
    cb ( null, resJson )
  } catch ( err ) {
    // 통신 실패
    cb ( err, '통신실패' )
  }
}