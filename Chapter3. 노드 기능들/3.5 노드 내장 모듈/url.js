const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

console.log('--------------------------------------');

const parsedURL = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedURL);

console.log('url.format():', url.format(parsedURL));



// url.parse(주소): 주소를 분해한다. WHATWG방식과 비교하면, username과 password 대신 auth속성이 있고, 
// searchParams 대신 query가 있다.

// url.format(객체): WHATWG방식의 url과 기존 노드의 url 모두 사용가능하다.
// 분해되었던 url객체를 다시 원래 상태로 조립한다.

//노드의 url형식을 꼭 사용해야 하는 경우
/*
    주소가 host부분 없이 pathname부분만 오는 경우(), WHATWG방식은 이 주소를 처리할 수 없다.
    
    WHATWG 방식은 search부분을 searchParams라는 특수한 객체로 반환하므로 유용하다.
    search부분은 보통 주소를 통해 데이터를 전달할 때 사용된다. search는 물음표(?)로 시작하고,
    그 뒤에 키=값 형식으로 데이터를 전달한다. 키가 여러 개일 경우, &로 구분한다.

*/