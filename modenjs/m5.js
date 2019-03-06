/* 클레스 */
// 기본의 js의 클레스는 4가지 종류가 존재
// 모던에서는 타 랭귀지와 유사한 형태로 추가가 되었다
// 기존 모델의 가장 이상적 형태는 생성자 함수 +  export 구성
// class 형태로 재편해서 제공

// 일반 클레스
class Food {  
  // 생성자 : 맴버 변수 초기화
  constructor ( name, price ) {
    // 맴버변수
    this.name  = name
    this.price = price
  }
  // 맴버함수
  info () {
    console.log( `${this.name} ${this.price}` )
  }  
}
const f = new Food( '천혜향', 50000 )
f.info()
console.log( f )

// 상속
// 부모의 모든 기능 사용 가능, 자식이 재정의 및 추가 할수 있다
class FoodEx extends Food
{
  constructor ( name, price, national ) {
    // 부모 생성자 호출
    super( name, price )
    this.national = national
  }
  // 재정의
  info () {
    // 생략 가능
    super.info()
    // 자식이 추가 재정의
    console.log( 'info call' )
  }
  // 함수 새로 추가
  // 정적함수 => 객체 생성 없이 호출
  static info2( obj )
  {
    console.log( `info call ${obj.national} ` )
  }
}
const obj2 = new FoodEx('apple', 100, 'ko')
obj2.info()
FoodEx.info2( obj2 )