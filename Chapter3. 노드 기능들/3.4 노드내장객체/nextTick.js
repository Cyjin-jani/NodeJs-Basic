setImmediate(() => {
    console.log('immediate');
});

//이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선으로 처리하도록 만듬.
process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeOut');
}, 0);

Promise.resolve().then(() => console.log('promise'));

// process.nextTick은 setImmediate나 setTimeout보다 먼저 실행된다
// resolve된 Promise도 nextTick처럼 다른 콜백들보다 우선시되기 때문이다
// 그래서 process.nextTick과 Promise를 마이크로태스크라고 따로 구분지어 부른다
