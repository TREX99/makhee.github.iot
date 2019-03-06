/* 화살표(에로우:arrow) 함수 */

// js의 함수
function sum ( a, b ) {
  var tmp = a + b
  return tmp
}
// 화살표 함수 변환법
/*
 - function 제거
 - 파라미터가 1개면 () 제거 가능. 단 아예 없으면 () 있어야함
 - => 화살표 추가
 - {}는 수행문(statement)가 1개면 생략 가능
 - 수행문이 하나고, 중괄호가 생략되어 있으면 return 제거 가능
*/
// 함수의 파라미터에 기본값 주기
function getPerson( name='ncia', age=5 )
{
  console.log( `${ name }의 나이는 ${age} 입니다.` )
}
getPerson()
getPerson( name='양재', 100 )
getPerson( '양재1' )
getPerson( '양재1', 1 )
// 기본값주기는 순서대로 갑이 들어간다
// 파라미터를 지정해도 순서대로 들어간다 (주의사항)
getPerson( age=10 )


function  getPerson2  ( name )  
{
  console.log( `${ name }의 나이는?` )
}
const getPerson3 = name => console.log( `${ name }의 나이는?` )
getPerson3('양재5')

// 에로우 함수에서 this 용법
var obj = {
  name:'이름',
  load:function(){
    setTimeout( function(){
      console.log( '1', this.name )
    }, 100 )
  }
}
obj.load()

var obj2 = {
  name:'이름',
  load:function(){
    setTimeout( ()=>console.log( '1', this.name ), 100 )
  }
}
obj2.load()

var obj3 = {
  name:'이름',
  load:() => {
    setTimeout( ()=>console.log( '1', this.name ), 100 )
  }
}
obj3.load()


