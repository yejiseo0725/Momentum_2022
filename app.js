// document: 브라우저에 이미 존재하는 object
// 내가 접근할 수 있는 HTML 을 가리키는 객체
// HTML 코드를 Javascript 관점에서 보는 것

const title = document.getElementById("title");

console.dir(title);
// <h1> 하나에서 무수히 많은 것들을 가져올 수 있다.

title.innerText = "got you!!";
// JS 에서 어떤 HTML element 이든지 가져올 수 있고, 변경할 수 있다.
