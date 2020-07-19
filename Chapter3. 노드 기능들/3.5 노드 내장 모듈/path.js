const path = require('path');

const string = __filename;

//경로의 구분자. window는 \ POSIX는 / (POSIX는 리눅스 혹은 Mac운영체제)
console.log('path.sep:', path.sep);
//환경변수의 구분자. .process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 되어있다. 
//window는 ; 이고 POSIX는 콜론(:) 으로 구분한다.
console.log('path.delimiter:', path.delimiter);
console.log('--------------------------------');

//파일이 위치한 폴더 경로
console.log('path.dirname():', path.dirname(string));
//파일의 확장자
console.log('path.extname():', path.extname(string));
//파일의 이름(확장자 포함)을 보여준다.
console.log('path.basename():', path.basename(string));
//파일의 이름만 표시하고 싶으면, 두번째 파라미터로 확장자를 넣어주면 된다.
console.log('path.basename():', path.basename(string, path.extname(string)));
console.log('--------------------------------');

//파일 경로를 root, dir, base, ext, name으로 분리한다.
console.log('path.parse():', path.parse(string));
//path.parse()한 객체를 파일 경로로 합친다.
console.log('path.format():', path.format({
    dir: 'C:\\users\\yjcho',
    name: 'path',
    ext: '.js',
}));
// /나 \를 실수로 여러 번 사용하였거나 혼용하였을 경우, 정상적인 경로로 변환해주는 기능.
console.log('path.normalize():', path.normalize('C://users\\\yjcho\\\path.js'));
console.log('--------------------------------');

//파일의 경로가 절대경로인지, 상대경로인지 true, false로 알려준다.
console.log('ptah.isAbsolute():', path.isAbsolute('C:\\'));
console.log('ptah.isAbsolute():', path.isAbsolute('./home'));
console.log('--------------------------------');

//경로를 두 개 넣으면, 첫번째 경로에서 두 번째 경로로 가는 방법을 알려준다.
console.log('path.relative():', path.relative('C:\\users\\yjcho\\path.js', 'C:\\'));
//여러 인자를 넣으면 하나의 경로로 합쳐준다. 상대경로인 ..(부모디렉터리)와 .(현 위치)도 알아서 처리해준다.
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/yjcho'));
//path.join과 비슷하지만, 차이가 존재함. 
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/yjcho'));
//join 과 resolve의 차이
//path.join과 path.resolve 메서드는 비슷해 보이지만 동작 방식이 다름.
//resolve는 /를 만나면 절대경로로 인식하여, 앞의 경로를 무시하고, join은 상대경로로 인식하여 처리한다.
//예시
//path.join('/a', '/b', 'c'); /* 결과: /a/b/c */
//path.resolve('/a', '/b', 'c'); /* 결과: /b/c */

//경로 표시
//기본적으로 경로는 \를 사용하여 표시한다 하지만 자바스크립트에서 \가 특수문자이므로 \\로 사용.
//예를 들어, \n 은 문자열 줄바꿈이라는 뜻이므로,
//C:\node는 옳지 않다. C:\\node로 표현해야 에러가 발생하지 않는다.
//path모듈은 위와 같은 경우에 발생하는 문제를 알아서 처리해준다. 특히나 윈도우에서 많이 쓰인다.

//상대경로와 절대경로
// 절대경로는 루트폴더(Windows의 C:\나 POSIX의 /)나 노드 프로세스가 실행되는 위치가 기준이 된다.
// 상대경로는 현재 파일이 기준이 된다. 현재 파일과 같은 경로면 점 하나(.)를, 현재 파일보다 한 단계 상위 경로면 ..로 표현한다.


// WINDOWS와 POSIX의 활용

//가끔 윈도우에서 POSIX 스타일의 경로를 이용하거나 그 반대가 있을 수 있다.
//아래와 같이 사용하면 된다.
//Window: path.posix.sep or path.posix.join()
//POSIX: path.win32.sep or path.win32.join()