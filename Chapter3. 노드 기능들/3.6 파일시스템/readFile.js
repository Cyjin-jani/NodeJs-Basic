const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    //readFile의 data라는 결과물은 버퍼라는 형식으로 제공됨.
    console.log(data);
    //사람이 읽을 수 있도록 문자열로 변환
    console.log(data.toString());
});