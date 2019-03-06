// 모듈 가져오기
// nodejs는 표준 모듈 가져오기를 지원하지 않는다
// 기존 형태를 보고, 신규 형태를 표시만
function old()
{
  var mod = require( './m_mod1' )
  console.log( mod.name )
  console.log( mod.getPI() )
  console.log( mod.obj )
}
old()
function new2()
{
  // nodejs는 지원하지 않으니까 오류 발생
  import A,{PI} from './m_mod2'
  // 리액트에서는 babel을 이용하요 호환코드로 변경되므로 
  // nodejs 환경에서도 구동 된다
}
new2()