const url = require('url');

// WHATWG 방식의 url대신, 기존 노드의 url을 사용할 때 search부분을 사용하기 쉽게 객체로 만드는 모듈.
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

const query = querystring.parse(parsedUrl.query);
//url의 query부분을 자바스크립트 객체로 분해해준다.
console.log('querystring.parse():', query); 
//분해된 query객체를 문자열로 다시 조립해준다.
console.log('querystring.stringify():', querystring.stringify(query));
