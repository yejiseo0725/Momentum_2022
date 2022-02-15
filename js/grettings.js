const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); // 새로고침 방지 (브라우저 기본 동작 방지)
  const username = loginInput.value;
  console.log(username);
}

// ~ onLoginSubmit(INFO) ~
// 우리는 그저 argument 에 공간을 제공하기만 하면,
// JS가 방금 일어난 event 에 대한 정보를 지닌 argument 를 채워넣는다.

loginForm.addEventListener("submit", onLoginSubmit);
// submit 은 enter 를 누르거나, 버튼을 클릭할 때 발생
// form submit 의 default 동작: 새로고침
