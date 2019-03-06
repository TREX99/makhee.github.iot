/*
  여러 화면을 구성하는 메인
*/
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

// 앱 화면 진행상 필요한 페이지
import { AuthCheckScreen, LoginSignupStack, LogoutStack } from '../screens/Auth';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
  // 화면의 별칭: 해당되는 컴포넌트
  // 다른 페이지에서 특정 페이지로 네비게이터(이동)하고 싶으면
  // 별칭을 통해서 화면 전환을 시도할수 있다.
  AuthMain: AuthCheckScreen,
  LoginSignup: LoginSignupStack,
  Logout: LogoutStack,
  Main: MainTabNavigator,
},
{
  // 최초 화면 지정
  initialRouteName: 'AuthMain'
}));