/* 문자열 포멧팅 */
// js문자열 : ' ... ', " ... "
// 표준에서는 ''만 사용하길 권장
// 기존 문자열 더하기
const a = '서울시'
const b = '서초구'
const c = '서초동'
console.log( a + " " + b + " " + c )

// 표준
// `(백틱:backtick) 기호를 이용하여 포멧팅 진행, 값은  ${ 변수 }
console.log( `${a} ${b} ${c}` )
// 용도 : 구조를 유지하고,
//        여러줄에 걸쳐서 표현되는 요구사항이 있을 경우
//        값이 중간에 들어가야 하는 상황이면
var keyword = 'Expo'
console.log( `
${keyword} is the easiest way to start building a new React 
Native application. It allows you to start a project 
without installing or configuring any tools to 
build native code - no Xcode or Android Studio 
installation required (see Caveats).

Assuming that you have Node 8+ installed, you can 
use npm to install the ${keyword} CLI command line utility:
` )
