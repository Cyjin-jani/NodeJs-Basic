//비밀번호는 보통 단방향 암호화 알고리즘을 사용.
//즉, 복호화 할 수 없는 암호화 방식을 사용한다.
//단방향 암호화 알고리즘은 주로 해시 기법을 사용.
//해시 기법? 어떠한 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 방식.
//입력 된 문자열의 길이가 달라도, 출력되는 문자열의 길이는 동일하다. (고정)

//노드에서 해시 사용하기
const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));

console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));

console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));


//createHash(알고리즘)
/*
사용할 해시 알고리즘을 넣어주면 된다. 
md5, sha1, sha256, sha512 등이 가능하다. 하지만 md5, sha1은 이미 취약점이 발견되어 사용하지 않는것이 좋다.
*/

//update(문자열)
/*
 변환할 문자열을 넣는다.
*/

//digest(인코딩)
/*
    인코딩할 알고리즘을 넣어 준다. base64, hex, latin1이 주로 사용된다. 그 중 base64가 문자열이 가장 짧아 많이 쓰임.
    결과물로 변환된 문자열을 반환.
*/