/*
  - 인증 체크 화면
  - 로그인 화면 -> 회원가입 화면 (stack)
  - 로그아웃 화면 (stack)
*/

import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, ActivityIndicator, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCNUChE6bsUdBzy5CeHn0n6tYY9hyHNVQE",
  authDomain: "makhee-ca10c.firebaseapp.com",
  databaseURL: "https://makhee-ca10c.firebaseio.com",
  projectId: "makhee-ca10c",
  storageBucket: "makhee-ca10c.appspot.com",
  messagingSenderId: "581805316937"
};
firebase.initializeApp(config);

// AsyncStorage 상에 저장된 인증정보를 읽어서 존재하면
// 다음 단계로(메인 서비스) 아니면 로그인으로 이동
export class AuthCheckScreen extends React.Component {
  constructor ( props ) {
    super ( props )
    this._checkAuth()
  }

  // AsyncStorage 에서 데이터 획득 => 비동기 : async ~ await
  _checkAuth = async () => {
    // 인증 정보 획득
    try {
      const uid = await AsyncStorage.getItem ( 'uid' )
      // 읽기 성공 => 값의 존재 여부에 따라 페이지 이동 분기
      // 페이지 전환
      // 이 화면은 이미 네이게이트와 연관을 맺고 있다.
      // navigation 속성이 생성
      this.props.navigation.navigate ( uid ? 'Logout' : 'LoginSignup')
    } catch ( err ) {
      // 오류 => 특정페이지 or 알림후 결정
    }

  }

  render () {
    const { container } = styles
    return (
      <View style = { container }>
        <ActivityIndicator/>
        <Text>인증 체크 화면</Text>
      </View>
    )
  }
}

class LoginScreen extends React.Component {
  constructor ( props ) {
    super ( props )

    this.state = {
      uid: '',
      upw: ''
    }
  }

  // 네비게이션바에 올라가는 제목
  static navigationOptions = {
    title: '로그인'
  }
  render () {
    const { container, inputWrap, btnWrap } = styles

    const _changeUid = ( uid ) => {
      this.setState ( { uid: uid } )
      console.log ( 'UID : ' , uid )
    }

    const _changeUpw = ( upw ) => {
      this.setState ( { upw: upw } )
      console.log ( 'UPW : ' , upw )
    }

    // 서버에 로그인 인증과 연동하여 처리
    const _loginBtn = () => {
      try{
        const { uid, upw } = this.state
        console.log( uid, upw )
        // 파이어베이스 로그인 연동.

        firebase.auth()
        .signInWithEmailAndPassword(uid, upw)
        .then( ( user ) => {
          if( user ) {
          _onLogin()
          }
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          Alert.alert ( errorMessage )
        });
      } catch ( err ) {
        console.log ( err )
      }      
    }

    const _onLogin = async () => {
      const { uid, upw } = this.state
      await AsyncStorage.setItem ( 'uid', uid )
      await AsyncStorage.setItem ( 'upw', upw )

      // 화면이동
      this.props.navigation.navigate ( 'Logout' )
    }
    
    const _singupBtn = () => {
      this.props.navigation.navigate ( 'signup' )
    }

    return (
      <View style = { container }>
        <View style = { inputWrap }>
          <View style = { { flexDirection: 'row', marginBottom: 10, justifyContent: 'center', alignItems: 'center' } }>
            <View style = { { flex: 1, marginLeft: 10, height: 40 } }>
              <Text>이메일</Text>
            </View>
            <View style = {{ flex: 4, marginRight: 10, height: 40 }}>
              <TextInput
                style = { { backgroundColor: '#ECECEC' } }
                placeholder = '이메일을 입력하세요'
                onChangeText = { _changeUid }
              />
            </View>
          </View>
          <View style = { { flexDirection: 'row', marginBottom: 10, justifyContent: 'center', alignItems: 'center' } }>
            <View style = { { flex: 1, marginLeft: 10, height: 40 } }>
              <Text>비밀번호</Text>
            </View>
            <View style = {{ flex: 4, marginRight: 10, height: 40}}>
            <TextInput
                style = { { backgroundColor: '#ECECEC' } }
                placeholder = '비밀번호를 입력하세요'
                onChangeText = { _changeUpw }
            />
            </View>
          </View>
        </View>
        <View style = { btnWrap }> 
          <View style = { { flexDirection: 'row' } }>
            <View style = { { flex:1, marginLeft: 10, marginRight: 10 } }>
              <Button
                title = '로그인'
                onPress = { _loginBtn }
              />
            </View>
            <View style = { { flex:1, marginLeft: 10, marginRight: 10 } }>
              <Button
                color = '#FFBB00'
                title = '회원가입'
                onPress = { _singupBtn }
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

class SignupScreen extends React.Component {
  constructor ( props ) {
    super ( props )

    this.state = {
      uid: '',
      upw: ''
    }
  }
    
  // 네비게이션바에 올라가는 제목
  static navigationOptions = {
    title: '회원가입'
  }
  render () {
    const _changeUid = ( uid ) => {
      this.setState ( { uid: uid } )
      console.log ( 'UID : ' , uid )
    }

    const _changeUpw = ( upw ) => {
      this.setState ( { upw: upw } )
      console.log ( 'UPW : ' , upw )
    }

    const _singupBtn = () => {
      // 이메일/비밀번호 입력이 없는경우는 생략.
      console.log ( '회원가입 ')
      const { uid, upw } = this.state

      firebase.auth()
      .createUserWithEmailAndPassword(uid, upw)
      .then( ( user ) => {
        // 성공
        Alert.alert ( '가입성공' )
        // 로그인으로 이동.

        _loginBtn()
      })
      .catch( ( error ) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      })


      this.props.navigation.navigate ( 'signup' )
    }

    // 서버에 로그인 인증과 연동하여 처리
    const _loginBtn = () => {
      try{
        const { uid, upw } = this.state
        console.log( uid, upw )
        // 파이어베이스 로그인 연동.

        firebase.auth()
        .signInWithEmailAndPassword(uid, upw)
        .then( () => {
          console.log('tttttttttt2')
          _onLogin()
        }
        )
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
      } catch ( err ) {
        console.log ( err )
      }      
    }

    const _onLogin = async () => {
      const { uid, upw } = this.state
      console.log( uid + ' / ' + upw )
      console.log('tttttttttt')
      await AsyncStorage.setItem ( 'uid', uid )
      await AsyncStorage.setItem ( 'upw', upw )

      // 화면이동
      this.props.navigation.navigate ( 'Logout' )
    }

    const { container, inputWrap, btnWrap } = styles
    return (
      <View style = { container }>
        <View style = { inputWrap }>
          <View style = { { flexDirection: 'row', marginBottom: 10, justifyContent: 'center', alignItems: 'center' } }>
            <View style = { { flex: 1, marginLeft: 10, height: 40 } }>
              <Text>이메일</Text>
            </View>
            <View style = {{ flex: 4, marginRight: 10, height: 40 }}>
              <TextInput
                style = { { backgroundColor: '#ECECEC' } }
                placeholder = '이메일을 입력하세요'
                onChangeText = { _changeUid }
              />
            </View>
          </View>
          <View style = { { flexDirection: 'row', marginBottom: 10, justifyContent: 'center', alignItems: 'center' } }>
            <View style = { { flex: 1, marginLeft: 10, height: 40 } }>
              <Text>비밀번호</Text>
            </View>
            <View style = {{ flex: 4, marginRight: 10, height: 40}}>
            <TextInput
                style = { { backgroundColor: '#ECECEC' } }
                placeholder = '비밀번호를 입력하세요'
                onChangeText = { _changeUpw }
            />
            </View>
          </View>
        </View>
        <View style = { btnWrap }> 
          <View style = { { flexDirection: 'row' } }>
            <View style = { { flex:1, marginLeft: 10, marginRight: 10 } }>
              <Button
                color = '#FFBB00'
                title = '회원가입'
                onPress = { _singupBtn }
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

class LogoutScreen extends React.Component {
  // 네비게이션바에 올라가는 제목
  static navigationOptions = {
    title: '로그아웃'
  }
  render () {
    _logout = async () => {
      try {
        await AsyncStorage.clear() // 저장된 모든 값 삭제
        firebase.auth()
        .signOut()
        .then(
          this.props.navigation.navigate ( 'AuthMain' )
        )

      } catch ( err ) {
        console.log( err )
      }
    }
    _goService = () => {
      // 메인 서비스 이동
      this.props.navigation.navigate ( 'Main' )
    }
    const { container } = styles
    return (
      <View style = { container }>
        <Button 
          title = '로그아웃'
          onPress = { _logout }
        />
        <Button 
          title = '메인 서비스로 이동'
          onPress = { _goService }
        />
        <Text>로그아웃 화면</Text>
      </View>
    )
  }
}

// LoginScreen 과 SignupScreen 을 스택으로 만든다.
export const LoginSignupStack = createStackNavigator ( { 
  login: LoginScreen,
  signup: SignupScreen
} )

export const LogoutStack = createStackNavigator ( {
  logout: LogoutScreen
} )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputWrap: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  }, 
  btnWrap: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});
