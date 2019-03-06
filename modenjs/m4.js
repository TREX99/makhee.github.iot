/* 객체/구조 분해, 객체리터럴 개선, 스프레드 연산 */
var station = {
  s1:'서울역',
  s2:'홍대역',
  s3:'양재역',
  s4:['교대역','강남역','역삼역']
}
// 객체의 맴버들을 사용
console.log( station.s1, station.s4 )


// 자바스크립트에서 객체 => {}
// 객체명.변수 이런 스타일 말고 변수로 바로 받아서 사용하고 싶다면
// 객체 구조 분해
var {s2, s3, s5} = station
// 맴버 변수와 같은 이름으로 변수를 받아주면 
// 알아서 객체에서 분해하여 세팅
console.log( s2, s3, s5 )

// 값을 받을 변수를 변경하면 원본이 반영되는가?
s3 = '용산역'
console.log( s3, station )
// 분해해서 받은 변수를 변경해도 원본은 영향을 받지 않는다


// 자바스크립트에서 배열 => []
// 배열 구조 분해
var [a1] = station.s4
// 변수명은 알아서, 순서가중요
console.log( a1 )
// 맨뒷값 받고 싶다
var [,,d1] = station.s4
console.log( d1 )


// 객체 리터럴 개선 => 1회성 객체로 사용, 파라미터를 여러개 보낼때 사용
// 맴버 변수, 함수들을 바깥에서 정의해서 객체를 구성 방법
var name = '양재'
var age  = 10
const getAge = () => {
  console.log( `${name}의 나이는 ${age}` )
}
var obj10= {
  // 객체에 변수를
  name,
  age,
  // 객체에 함수를
  getAge
}
console.log( obj10 )
console.log( obj10.name )
obj10.getAge()

var obj11= {
  name,
  age,  
  getAge,
  
  // 표준함수에서 function을 제거한 구조로 정의
  info () {
    console.log( `${name}` )
  }
}
obj11.info()

// 스프레드 연산
// ...변수 => 전체를 대변
var a1 = ['콜라','물','사이다']
var a2 = ['밥','햄버거']
// a1과 a2의 구성원으로 구성되면 좋겟다
var a3 = [ ...a1, ...a2 ]
console.log( a3 )
console.log( a3.join(',') )

// reverse()는 원본이 변경된다 문제점
var [b1] = a1.reverse()
console.log( b1, a1 )

// 원본의 사본을 떠서 조작해서 처리
var a5   = ['콜라','물','사이다']
var [b2] = [...a5].reverse()
console.log( b2, a5 )

// 구조분해 + 스프레드 연산
var [c1, ...d1] = a5
console.log( c1, d1 )

// 함수 인자 활용
function d ( ...args )
{
  console.log( args )

  var [e, ...remain] = args
  var [f, ...end] = remain.reverse()
  console.log( e, f, end, remain )

}
d( '콜라','물','사이다' )
