/* 변수 키워드 */
// 1. 기존 키워드
// 세이콜론은 생략 가능(표준에서는 제거, 만약사용한다면 여러줄 표현)
var ani = 'cat'
console.log( ani )
ani = 'dog'
console.log( ani )

// 기본에는 상수 관점이 없어서 변수만 으로 모든 처리
// ES2015에서 추가된 표준
// const : 상수 => immutable => 변할수 없다 => 대문자 통상 사용
// let   : 변수 범위에 대한 처리 => 예를 통해서 확인
const PI = 3.14
console.log( PI )
// 상수는 변경할수 없다
// PI = 3.145

// 렉시컬스코프 키워드
// 이름이 동일해도 변수의 범위를 별도로 처리된다
// 서로 다른 변수가 된다
var name = '리액트'
console.log( name )
if (name) {
  var name = '리덕스'
  console.log( name )
}
console.log( name )

var name1 = '리액트'
console.log( name1 )
if (name1) {
  let name1 = '리덕스'
  console.log( name1 )
}
console.log( name1 )


