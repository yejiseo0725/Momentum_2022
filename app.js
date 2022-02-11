// const body = document.body;

// function handleResize() {
//   const width = window.innerWidth;
//   if (width <= 600) {
//     body.style.backgroundColor = "#0066ff";
//   } else if (width > 600 && width <= 900) {
//     body.style.backgroundColor = "#ff4949";
//   } else {
//     body.style.backgroundColor = "#ffc82c";
//   }
// }

// window.addEventListener("resize", handleResize);

const age = parseInt(prompt("몇 살이니?"));
console.log(age);
// 요즘에는 대부분이 HTML, CSS 로 만든 자신만의 창을 사용한다.
// function: 내부부터 외부로 실행

// * Data type 변경하기
// parseInt("15");
// Converts a string to an integer

// console.log(age, parseInt(age));
// 사용자에게 나이를 물어보고, 숫자가 아닌걸 입력 받았을 경우 인지 가능
// 숫자가 아니라면 NaN (Not a Number) 보여줌
