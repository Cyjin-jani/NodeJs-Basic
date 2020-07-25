const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x,y) => {
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마라.');
dontUseMe(1,2);
//함수가 deprecated 처리되었음을 알려준다.
//첫 번쨰 인자로 넣은 함수를 사용하였을 때 경고 메세지가 출력된다. 두번째 인자로 경고 메세지 내용을 넣으면 된다.


const randomBytePromise = util.promisify(crypto.randomBytes);
randomBytePromise(64)
.then((buf) => {
    console.log(buf.toString('base64'));
})
.catch((error) => {
    console.error(error);
});

//콜백 패턴을 프로미스 패턴으로 바꾸어준다.
//바꿀 인자로 함수를 제공하면 된다.
