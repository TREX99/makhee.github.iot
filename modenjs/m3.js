/* 화살표 함수 */

// 기존 js 함수
function sum ( a, b ) {
  var tmp = a + b;
  return tmp;
}

// 화살표 함수 변환법

/*
 - function 제거 
 - 파라미터 1개면 () 제거 가능. 단 없으면 () 있어야함.
 - => 화살표 추가
 - {}는 수행문 (statement)가 1개면 생략 가능
*/

const sum2 = ( name,  age ) => {
  console.log( `${name} ${age}`)
}

sum2('test', 6)



var obj2 = {
  
}