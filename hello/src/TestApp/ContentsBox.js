import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StylesCommon } from './CommonStlye';


export default class ContentsBox extends React.Component {
  render () {
    const { basicFont, basicView } = StylesCommon
    return (
      <View style = {{ flex: 1 }}>
        <MyList/>
      </View>
    )
  }
}


// 리스트
/*
  - 시간이 지남에 따라 항목의 수가 늘어날수 있는 케이스
  - 데이터가 너무 많을경우
  - 네트워크를 통해서 데이터를 받아서 화면으로 표현할떄 적합
  - 더보기 기능에도 적합한 구조
  - FlastList : 헌재 화면에 보이는 요소만 랜더링
  - 모든 요소를 랜더링 하지 않는다. -> 네이티브앱의 리스팅 처리의 기본 매커니즘
  - 속성표
    > data : 데이터, 정보 제공 출처
    > renderItem : 데이터 하나를 가져와서 화면에 보이는 JSX 구조로 처리하는 역할 => 함수 => map()과 유사한 기능
    
*/
const rowData = [
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'},
  {img: 'img_path', title: 'title', contents: 'content'}
]

class MyList extends React.Component {

  render() {
    const cb = ({ item }) => {
      return(
        <View style = {{ flex : 1, flexDirection: 'row', borderWidth: 1 }}>
          <View style = {{ flex:1, borderRightWidth: 1 }}>
            <Text style={{ fontSize: 14*3 }}>{ item.img }</Text>
          </View>
          <View style = {{ flex:2, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 14*3 }}>{ item.title }</Text>
            <Text style={{ fontSize: 14*2 }}>{ item.contents }</Text>
          </View>
        </View>
        
      )
    }
    
    return (
      <FlatList 
        data = { rowData }
        renderItem = { cb }
        keyExtractor= { ( item, index ) => `${index}` }
      />
    )
  }

}
