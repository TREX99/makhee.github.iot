import React from 'react';
import { 
        StyleSheet, 
        Text, 
        View, 
        ScrollView, // 일반 고정적 리스트
        FlatList, // 가변형 리스트
        SectionList,  // 가변형 리스트인데, 섹션 정보가 존재하는
        Alert
      } from 'react-native';
import { StylesCommon } from './CommonStlye';


export default class AppScroll extends React.Component {
  render () {
    const { basicFont, basicView } = StylesCommon
    return (
      <View style={ basicView }>
        <Text style={ basicFont }>Hello World</Text>
        {/* <MyScroll/> */}
        {/* <MyList/> */}
        <MyList2/>
      </View>
    )
  }
}

// 스크롤뷰 구성
// 리스팅 되는 내용이 고정적 유리, 가변적 부적합
// 모든 데이터가 다 랜더링시 처리된다

class MyScroll extends React.Component {

  render() {
    const data = ['에어팟2', '200달러', '영하나', '백석문화대학교', 'txt', 'ncs', '백석예술대학교', '백석대학교', '경동대학교']
    // 리스트를 구성시 항목을 구성하는 컴포넌트는 
    // Key props 르 추가하여 고유한 값을 부여해야한다. => 경고(누락시)
    const list = data.map ( (item, i) => {
      return <Text style={{ fontSize: 14*3 }} key={ i }>{ item }</Text>
    })
    return (
      <ScrollView>
         { list }
      </ScrollView>
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
  {team: '사과'},
  {team: '배'},
  {team: '자두'},
  {team: '복숭아'},
  {team: '딸기'},
  {team: '포도'},
  {team: '살구'},
  {team: '귤'},
  {team: '오렌지'},
  {team: '자몽'},
  {team: '파인애플'},
  {team: '망고'},
  {team: '앵두'}
]

class MyList extends React.Component {

  render() {
    const cb = ({ item }) => {
      return(
        <Text style={{ fontSize: 14*3 }}>{ item.team }</Text>
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

/*
  섹션 리스트
  - 항목의 카테고리(정하기 나름)에 맞춰서 데이터에 섹션이 표기되고
  - 섹션별로 데이터가 분리되는 스타일
*/

const rowData2 = [
  {cate: '견과류', data: ['땅콩', '아몬드']},
  {cate: '음료', data: ['물', '사이다']},
]

class MyList2 extends React.Component {
  onPress ( evt ) {
    console.log( evt )
    Alert.alert('셀을 클릭 or 탭')
  }
  render() {
    // 데이터 출시 item 이라는 변수명 고정
    const onRenderItemView = ({ item }) => {
      // 일반 데이터
      return (
        <Text onPress={ this.onPress }>{ item }</Text>
      )
    }

    // 데이터 추출시 section 이라는 변수명 고정
    const onRenderHeaderView = ({ section }) => {
      // 헤더 데이터(섹션)
      return (
        <Text style={{ backgroundColor: 'black', color: 'white' }}>{ section.cate }</Text>
      )
    }

    return (
      <SectionList
        sections={ rowData2 }
        renderItem={ onRenderItemView }
        renderSectionHeader={ onRenderHeaderView }
        keyExtractor={ ( item, index ) => `${index}` }
      />
    )
  }

}