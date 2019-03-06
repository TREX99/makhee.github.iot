import React from 'react';
import { Text } from 'react-native';

export class MonoText extends React.Component {
  render() {
    // 기존 스타일에 + 새스타일을 추가하고 싶다면
    // style = { [ 기존스타일, { 새스타일 } ] }
    // 재정의된 새로운 솏성들을 추가하는 방법
    // 태그에 {...this.props} 추가하면 된다.
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
