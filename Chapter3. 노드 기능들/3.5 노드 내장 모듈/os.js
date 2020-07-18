const os = require('os');

console.log('운영체제 정보 -------------------------');

console.log('os.arch()', os.arch()); //process.arch와 동일
console.log('os.platform()', os.platform()); //process.platform과 동일
console.log('os.type()', os.type()); // 운영체제의 종류
console.log('os.uptime()', os.uptime()); //운영체제 부팅 이후 흐른 시간(초), process.uptime()은 노드의 실행시간
console.log('os.hostname()', os.hostname()); //컴퓨터의 이름
console.log('os.release()', os.release()); //운영체제의 버젼


console.log('경로 정보 -------------------------');

console.log('os.homedir()', os.homedir()); // 홈 디렉토리 경로
console.log('os.tmpdir()', os.tmpdir()); //임시파일 저장 경로


console.log('cpu 정보-------------------------');

console.log('os.cpus()', os.cpus()); //컴퓨터의 코어 정보
console.log('os.cpus().length', os.cpus().length); //코어 개수 확인
//노드는 싱글 스레드라 코어가 몇 개이든 대부분의 경우 코어를 하나만 사용한다. 하지만 cluster모듈을 사용할 경우,
//코어 개수에 맞춰서 프로세스를 늘릴 수 있다. 이떄 cpus() 메서드를 사용한다.

console.log('메모리 정보-------------------------');

console.log('os.freemem()', os.freemem()); //사용 가능한 RAM메모리
console.log('os.totalmem()', os.totalmem()); //전체 메모리 용량

//각종 에러와 신호에 대한 정보
//os.constants

//OS모듈은 주로 컴퓨터 내부 자원에 빈번하게 접근하는 경우 사용.
// 즉, 일반적인 웹 서비스를 제작하는 때는 사용 빈도가 높지 않다.
// 하지만 운영체제별로 다른 서비스를 제공하고 싶을 때 os 모듈이 유용할 것.
