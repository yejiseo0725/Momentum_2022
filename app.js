const player = {
  name: "yeji",
  points: 100,
  fat: true,
};

// objects
// { } 사용하기
// : 사용하기

// function: 코드의 반복을 최소한으로 줄이기
// 어떤 코드를 캡슐화해서, 재실행 가능하게 해 줌

function greeting() {
  console.log("hi :3");
}

greeting(); // () 가 우리가 함수를 실행하는 방법

// argument: function 을 실행하는 동안 어떤 정보를 function 에게 보낼 수 있는 방법

greeting("yeji"); // Sending data to 'greeting' function
greeting("nico");
greeting("jihwan");
