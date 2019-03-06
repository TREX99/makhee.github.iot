# 일자별 교육 계획

## 1일차 
- 모던 자바스크립트 주요 변경 사항 위주 (ES2015, ES6, ES2017 ) 개발에 필요한 문법 사항 숙지

## 2일차
- 리액트 기본 props, state, event, 컴포넌트 생성
- 네트워크 통신 (API)

## 3일차
- UI 구성 
- 화면 전환(네비게이션, 라우트)
- 서버(Firebase)연동
- 배포

* * *

## 1. 리액트 개념 
   - Front Framework

     *ReatJS 를 바탕으로 앱으로 개발하기 위해 나온 환경이 React-Native*

   - React-Native : 2세대 하이브리드 앱
      - 1세대 : 웹뷰 기반 + (html+css+JS) 결합하여 구성 폰갭, 코르도바, 아이오닉(2세대로보기도함)등등
      - 2세대 : react-native 
      - 3세대 : flutter (https://flutter.dev) dart 언어로 개발(구글)

## 2. 개발 환경 구축
   - noedjs (8.x 이상)
     >  https://nodejs.org

   - IDE : vscode
     >  https://code.visualstudio.com/download
   
   - 빌드툴 구동환경 : expo
     > https://expo.io/

     <pre>
     <code>$ npm install -g expo-cli</code>
     </pre>

   - 안드로이드 : java JDK (최신 버전) + android studio
     > java JDK : https://www.oracle.com/technetwork/java/javase/downloads/index.html

     > android studio : https://developer.android.com/studio

   - iOS : xcode

   - React-Native 공식 사이트
     > https://facebook.github.io/react-native/

   - git
     > https://git-scm.com
     
      *git내용을 가져다가 node-module를 구성하기 때문에 반드시 사전 설치가 필요하다*

## 3. 기본 프로젝트 생성 및 구동 
    - 터미널 오픈
    - 메인 프로젝트 폴더 위치에서 프로젝트 생성
    <pre>
        $ expo init hello
        ================================================
        ? Choose a template: (Use arrow keys)
        ----- Managed workflow -----
        > blank         minimal dependencies to run and an empty root component 
        tabs          several example screens and tabs using react-navigation
        ----- Bare workflow -----
        bare-minimum  minimal setup for using unimodules
        ================================================
        
        $ blank 선택
        
        ================================================
        ? Please enter a few initial configuration values.
        Read more: https://docs.expo.io/versions/latest/workflow/configuration/ » 100% completed
        {
            "expo": {
            "name": "앱의 이름",
            "slug": "hello"
            }
        }
        ================================================
        
        $ cd hello
        $ npm start
    </pre>
    - 사이트에 프로젝트 관리 페이지 자동 오픈
    - 애뮬레이터를 구동
    - 사이트에서 Run On Android 선택하여 App build 확인 

## 4. React-Native 기본 프로젝트 구조
    <pre>
        hello
            ┗ .expo                  : 프로젝트 관련 파일
            ┗ packager-info.json
            ┗ settings.json
            ┗ assets                 : 리소스
            ┗ node_modules           : 모듈
            ┗ *
            ┗ .gitignore             : git ignore 리스트
            ┗ .watchmanconfig
            ┗ App.js                 : 실제 작성 코드(리액트네이티브로 구성)
            ┗ app.json               : 프로젝트 자체 기술 파일
                                       배포를 위해 아래 내용 추가 및 수정
                                       ====================
                                       "ios": {
                                       "supportsTablet": true,
                                       "bundleIdentifier":"com.example.hello"
                                       },
                                       "android": {
                                       "package":"com.example.hello"
                                       }
                                       ====================
            ┗ babel.coifig.js        : 리액트 코드를 호환 코드로 변환
            ┗ package-lock.json      : npm install이 진행되면 자동 생성
            ┗ package.json           : 구동에 필요한 패키지가 상세 기술
                                       npm install --save 패키지명을 실행하면 자동으로 추가됨
    </pre>

## 5. 배포
   - android studio > build > generater signed bundle > key 생성
   - expo build:android > expo 로그인 > 빌드 완료 > 생성된 url로 스토어 업로드 https://bit.ly/2Tjp0aa

