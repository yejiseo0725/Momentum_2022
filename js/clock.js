// Intervals & Timeout

const clock = document.querySelector("#clock");

// Interval: '매번' 일어나야 하는 무언가 ex) 매 2초 마다 발생하는 일

function sayHello() {
  console.log("hello");
} // 이 함수 매 2초마다 실행하기!

// setInterval(sayHello, 5000);
// 두 개의 argument 를 받는다.
// 1) 실행하고자 하는 function, 2) ms 단위의 초 쓰기 1s = 1000ms
// => 내가 지정한 ms 만큼 기다렸다가 실행 (계속 실행)

setTimeout(sayHello, 5000);
// 지정한 ms 만큼 기다렸다가 한 번만 실행
