//양방향 암호화
// 암호를 복호화 하기 위해서는 암호화 시 사용한 키와 같은 키를 사용하여야 한다.

const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화: ', result );

const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);


// crypto.createCipher(알고리즘, 키)
/*
암호화 알고리즘과 키를 넣어준다. 암호화 알고리즘은 aes-256-cbc를 사용하였다.
사용가능한 알고리즘 목록은 crypto.getCiphers()를 하면 볼 수 있다.
*/

// crypto.update(문자열, 인코딩, 출력 인코딩)
/*
암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣어준다. 
보통 문자열은 utf8인코딩을, 암호는 base64를 많이 사용한다.
*/

// crypto.final(출력 인코딩)
/*
출력 결과물의 인코딩을 넣어주면 암호화가 완료된다.
*/

// crypto.createDecipher(알고리즘, 키)
/*
복호화 할 때 사용한다.
암호화할 때 사용했던 알고리즘과 키를 그대로 넣어주어야 한다.
*/

// decipher.update(문자열, 인코딩, 출력 인코딩)
/*
암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣어준다.
암호화 할 때 utf8, base64 순으로 넣었다면 복호화는 그 역순으로 넣어주면 된다.
*/

// crypto.final(출력 인코딩)
/*
복호화 결과물의 인코딩을 넣어준다.
*/

//노드 12 이상부터는 위의 createCipher를 사용하면 안된다.

//crypto.createCipheriv라는 놈을 사용해주어야 한다.

//예제 코드는 아래와 같다.

// 'use strict';

// const crypto = require('crypto');

// const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 256 bits (32 characters)
// const IV_LENGTH = 16; // For AES, this is always 16

// function encrypt(text) {
//  let iv = crypto.randomBytes(IV_LENGTH);
//  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
//  let encrypted = cipher.update(text);

//  encrypted = Buffer.concat([encrypted, cipher.final()]);

//  return iv.toString('hex') + ':' + encrypted.toString('hex');
// }

// function decrypt(text) {
//  let textParts = text.split(':');
//  let iv = Buffer.from(textParts.shift(), 'hex');
//  let encryptedText = Buffer.from(textParts.join(':'), 'hex');
//  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
//  let decrypted = decipher.update(encryptedText);

//  decrypted = Buffer.concat([decrypted, decipher.final()]);

//  return decrypted.toString();
// }

// module.exports = { decrypt, encrypt };

//출처: https://gist.github.com/vlucas/2bd40f62d20c1d49237a109d491974eb