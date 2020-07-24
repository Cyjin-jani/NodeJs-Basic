// 현재는 주로 pbkdf2나 bcrypt, scrypt라는 알고리즘으로 비밀번호를 암호화 한다.
// pbkdf2는 기존 문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용하는 것이다.

const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
    });
});

//randomBytes() 메서드로 64비트 길이의 문자열을 만듦.
// 이것이 salt가 됨.
//pbkdf2() 메서드에는 순서대로 비밀번호, salt, 반복횟수, 출력 바이트, 해시 알고리즘을 파라미터로 넣음.

//pbkdf2는 간단하지만, bcrypt, scrypt보다 취약하다. 
// 더 나은 보안이 필요하면 scrypt방식을 사용하길 추천한다.
