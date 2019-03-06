// 콜백헬 => 콜백함수가 과하게 집중되면서 
// 코드가 한없이 않으로 들어가서 가독성이 떨어진다.
// 비동기 처리=> 네트워크 처리
// 이를 위해서 Promise 패턴을 활용한 처리 기법이 
// ES2015, ES6, ES2017까지 계속 추가된다
// 기본 콜백헬 구성

// a.txt ~ c.txt 까지 순차적으로 읽어서 내용을 출력한다
// 리소스르 접근하는 것이니까 => 비동기 작업 => 콜백함수 처리
const fs = require('fs')

class Test
{
  constructor () {
    this.FILE1 = './dir/a.txt'
    this.FILE2 = './dir/b.txt'
    this.FILE3 = './dir/c.txt'
  }
  // 일반 콜백 함수
  normal () {
    fs.readFile( this.FILE1, (err, data)=>{
      console.log( this.toStr(data) )
      fs.readFile( this.FILE2, (err, data)=>{
        console.log( this.toStr(data) )
        fs.readFile( this.FILE3, (err, data)=>{
          console.log( this.toStr(data) )
        })
      })
    })
  }
  // 문자열 처리 함수
  toStr ( data ) {
    return new String(data).toString()
  }
  // es2015에서 추가된 형태
  es2015_Promise ( fName ) {
    return new Promise( ( cb )=>{
      fs.readFile( fName, (err, data)=>{
        cb( data )
      })
    } )
  }
  es2015 () {
    // Promise ~ then
    this.es2015_Promise( this.FILE1 )
    .then( (data)=>{
      // 1번 파일 읽을 후
      console.log( this.toStr(data) )
      return this.es2015_Promise( this.FILE2 )
    } )
    .then( (data)=>{
      // 2번 파일 읽을 후
      console.log( this.toStr(data) )
      return this.es2015_Promise( this.FILE3 )
    } )
    .then( (data)=>{
      // 3번 파일 읽을 후
      console.log( this.toStr(data) )
    } )
  }
  // es6에서 추가된 형태
  es6_Promise ( fName ) {
    return new Promise( ( cb, reject )=>{
      fs.readFile( fName, (err, data)=>{
        cb( data )
      })
    } )
  }
  async es6 () {
    // async ~ await
    console.log(this.toStr(await this.es6_Promise(this.FILE1)))
    console.log(this.toStr(await this.es6_Promise(this.FILE2)))
    console.log(this.toStr(await this.es6_Promise(this.FILE3)))
  }
  // es2017에서 추가된 형태
  es2017 () {
    // generator ~ yield
    // g : generator : 이전함수가 수행을 끝내면 다음 단계 진행기능
    // yield : 작업 끝날때까지 대기
    function es2017_Promise ( g, fName ) {
      fs.readFile( fName, (err, data)=>{
        g.next( data )
      })
    }
    // 함수, 변수 재정의
    const toStr = (data) => new String(data).toString()
    const {FILE1, FILE2, FILE3} = this

    // 사용법
    // 제너레이터를 만들고
    const g = ( function * (){
      // 기술
      console.log( toStr( yield es2017_Promise(g, FILE1) ) )
      console.log( toStr( yield es2017_Promise(g, FILE2) ) )
      console.log( toStr( yield es2017_Promise(g, FILE3) ) )
    } )()
    // 가동
    g.next()

  }
}
const test = new Test()
//test.normal()
//test.es2015()
// test.es6()
test.es2017()