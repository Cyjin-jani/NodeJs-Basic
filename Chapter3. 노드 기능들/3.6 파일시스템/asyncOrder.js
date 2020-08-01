const fs = require('fs');

console.log('시작');

fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme2.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme2.txt', (err, data) => {
            if (err) {
                throw err;
            }
            console.log('3번', data.toString());
        });
    });
});

console.log('끝');

//비동기로 순서 유지하기 ( 대신 콜백 지옥.... 추후 promise나 async/await를 써서 해결 가능.)