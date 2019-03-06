// 공용 스타일을 모아둔곳
import { StyleSheet } from 'react-native';

export const StylesCommon = StyleSheet.create({
  // 앱상의 모든 폰트의 디자인
  basicFont: {
    fontSize: 14, // 표준 기본 글자 크기
    color: '#333333'
  },
  // 기본 베이스 뷰의 레이아웃
  basicView: {
    flex:1, 
    backgroundColor: 'steelblue',
    marginTop: 24,
    flexDirection: 'column'
  },
  basicCenter: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
