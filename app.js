// event: on 으로 시작하는 것들

const body = document.body;
const hello = document.querySelector("h2");

function handleResize() {
  const width = window.innerWidth;
  if (width <= 600) {
    body.style.backgroundColor = "#0066ff";
    hello.style.color = "white";
  } else if (width > 600 && width <= 900) {
    body.style.backgroundColor = "#ff4949";
    hello.style.color = "white";
  } else {
    body.style.backgroundColor = "#ffc82c";
    hello.style.color = "white";
  }
}

window.addEventListener("resize", handleResize);

// JS 에게 어떤 event 를 listen 하고 싶은지 알려주기
// 1) 어떤 event 인지 명확히 하기 2) 그 때 어떤 함수 실행시킬지 명시하기
// 인자의 함수는, 내가 click 했을 때 JS 가 대신 그 함수를 실행시키기 위해
