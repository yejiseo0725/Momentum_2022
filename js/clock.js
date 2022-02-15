// Intervals & Timeout

const clock = document.querySelector("#clock");

// Interval: '매번' 일어나야 하는 무언가 ex) 매 2초 마다 발생하는 일

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
// 이걸 지운다면, 1초동안 00:00 을 표시하고 그 뒤에 시간이 갱신된다.
setInterval(getClock, 1000);
// 두 개의 argument 를 받는다.
// 1) 실행하고자 하는 function, 2) ms 단위의 초 쓰기 1s = 1000ms
// => 내가 지정한 ms 만큼 기다렸다가 실행 (계속 실행)

// setTimeout(sayHello, 5000);
// 지정한 ms 만큼 기다렸다가 한 번만 실행
