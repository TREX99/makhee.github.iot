import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
        // AppLoading 컴포넌트를 이용하면 앱 구동시 최초 
        // 올려야 하는 리소스, 네트워크 자료등 모두 로드 될 때까지
        // 대기시키고, 끝나면 다음 단계로 진행하게 하는 부분 담당
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      // 리소스 로드가 모두 완료 되었다.
      // 서비스 화면을 그려라.
      return (
        <View style={styles.container}>
          {/* 상단 상태바에 대한 설정 */}
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  // 최초 로딩시 리소스 로드 처리 (비동기)
  _loadResourcesAsync = async () => {
    // 비동기적으로 진행될 각각의 작업을 배열로 묶고
    // 순차처리가 가동하도록 Promise.all(배열)
    return Promise.all([
      // 이미지 로드
      Asset.loadAsync([
        // require = 소스를 제외한 리소스를 불러올때 사용
        // 로컬 이미지 로드
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      // 폰트 로드
      // 폰트 커스터마이즈
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  // 최초 로딩시 에러가 발생하면
  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  // 최초 로딩시 리소스 로드가 완료되면
  _handleFinishLoading = () => {
    // 상태를 변경하여 render 다시 
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
