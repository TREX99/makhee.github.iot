// 기존의 모듈화 모습
var PI    = 3.14 // 다른 코드에서 직접 접근 불가하게 => private
// 아래 2개를 모듈화 하고 싶다(다른 코드가 사용가능하게) => public
/*
var name  = 'ncia'
var getPI = ()=>PI
*/
exports.name  = 'ncia'
exports.getPI = ()=>PI
// 객체의 모듈화
module.exports.obj = {}