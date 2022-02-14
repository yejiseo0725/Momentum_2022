const loginInput = document.querySelector("#login-form input");
const logingButton = document.querySelector("#login-form button");

function handleBtnSubmit() {
  console.log("hello", loginInput.value);
}

logingButton.addEventListener("click", handleBtnSubmit);
