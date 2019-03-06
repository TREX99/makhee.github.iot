/*
  - 상단에 검색창
  - 옆에 검색버튼
  - 하단에 검색결과 리스트
  이렇게 구성되는 화면을 그리세요.
*/
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, ActivityIndicator, Image } from 'react-native';
import { StylesCommon } from './CommonStlye';
import { getKakaoApi } from './AppNetwork';


export default class AppSearchView extends React.Component {
  constructor ( props ) {
    super ( props )
    this.state = {
      keyword: '',
      result: null, // 최초 화면에 리스트가 뿌려질수 있으니 아무것도 하지않도록 null로 초기화. 정의도 되어있어야 한다.
      isLoading: false
    }
    
    this._onSearchInput = this._onSearchInput.bind ( this )
  }

  // 검색창에서 입력한 내용이 이쪽으로 전달된다.  
  _onSearchInput = ( text ) => {
    // 검색창에 입력한 내용을 state의 변수에 담는다 => 랜더링 진행
    this.setState ( { keyword: text } )
  }
  render () {
    const { basicFont, basicView } = StylesCommon
    const { stateArea, contentArea, topBar, customCell } = myStyles
    const { keyword, result, isLoading } = this.state
    
    if( isLoading ) {
      return (
        <View style = { basicView }>
          <View style = { stateArea }>
            <ActivityIndicator/>
          </View>
        </View>
      )
    }

    // 앞에 변수 키워드(const) 생략 가능 => 함수니까
    _onSearch = () => {
      // 검색하는 부분
      // 검색어가 없을 경우에서 검색하는 경우
      if ( this.state.keyword === '' ) {
        Alert.alert('검색어 입력후 검색하세요.')
      }

      // 로딩 시작
      this.setState ( { isLoading: true } )
      // 정상상황

      const url = 'https://dapi.kakao.com/v2/search/image?sort=recency&query='
      getKakaoApi ( url + keyword, ( err, resJson ) => { 
        // 외부적 통신 장애
        if ( err ) { // 조건식도 함수 구성에따라 처리
          Alert.alert ( '통신 오류', err )
          return
        }
        // 주소가 틀리는등, 인증이 틀린것등 개발자 오류
        // resJson을 분석해서 처리
        // 성공
        // 현재 컨셉은 더보기 없음.
        this.setState ( { result: resJson.documents } )

        // 로딩 종료
        this.setState ( { isLoading: false } )
        
        // console.log( this.state.result )
       } )
    }

    // 통신결과 result 데이터를 가지고 화면을 구성하는 함수 인자는 item 고정.
    _customCell = ( { item } ) => {
      return (
        <View style = { customCell }>   
          <Image 
            source = { { url: item.thumbnail_url } }
            style = { { width: 100, height: 100 } }
          />
          <Text>{ item.display_sitename }</Text>
        </View>
      )
    }

    return (
      <View style={ basicView }>
        {/* 상단바 */}
        <View style = { stateArea }>
          {/* 검색창과 검색 버튼을 옆으로 두고 배치 */}
          <View style = { topBar }> 
            <View style = {{ flex: 3, backgroundColor: '#FFFFFF' }}>
              <TextInput
                style = {{ flex: 1, paddingLeft: 10, paddingRight: 10 }}
                placeholder = '이미지 검색내용 입력'
                onChangeText = { this._onSearchInput }
                value = { keyword }
              />
            </View>
            <View style = {{ flex: 1, justifyContent: 'center', backgroundColor: '#0054FF' }}>
              <Button
                title = '검색'
                color = '#0054FF'
                onPress = { _onSearch }
              />
            </View>
          </View>
        </View>
        {/* 검색결과 */}
        <View style = { contentArea }>
          <FlatList
            data = { result }
            renderItem = { _customCell }
            keyExtractor = { ( item, index ) => `${index}` }
          />
        </View>
        {/* 하단바(생략가능) */}
        <View style = { stateArea }>
          <Text>리액트 검색</Text>
        </View>
      </View>
    )
  }
}

const myStyles = StyleSheet.create({
  // 상단바, 하단바
  stateArea: {
    flex: 1,
    backgroundColor: '#00D8FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // 본문
  contentArea: {
    flex: 12,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  customCell: {
    height: 120,
    margin: 5,
    backgroundColor: '#E4F7BA'
  }
})