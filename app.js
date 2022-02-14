const loginInput = document.querySelector("#login-form input");
const logingButton = document.querySelector("#login-form button");

function handleBtnSubmit() {
  const username = loginInput.value;
  console.log(username);
}

logingButton.addEventListener("click", handleBtnSubmit);

// username 유효성 검사
// 언제나 user 를 믿지 않고 유효성을 검사하는 것은 아주 좋은 습관이지만,
// 이미 가지고 있는 기능을 사용하는 것을 추천한다!
// input: required, maxlength 등 이용하기
// 여기서 input 은 반드시 form tag 안에 들어가 있어야 한다.
