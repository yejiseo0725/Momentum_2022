const person = {
  name: "yeye",
  points: 100,
  fat: true,
};

// objects
// { } 사용하기
// : 사용하기

// function: 코드의 반복을 최소한으로 줄이기
// 어떤 코드를 캡슐화해서, 재실행 가능하게 해 줌

function greeting(person, age) {
  console.log("hi my name is " + person + " and my age is " + age);
}

// greeting(); () 가 우리가 함수를 실행하는 방법

// argument: function 을 실행하는 동안 어떤 정보를 function 에게 보낼 수 있는 방법

greeting("yeji", 22); // Sending data to 'greeting' function
greeting("nico", 25);
greeting("jihwan", 17);

// 이 데이터를 받기 위해서는 함수의 () 에 데이터를 추가해야 함
// 어떤 변수 이름이든 허용

function plus(a, b) {
  console.log(a + b);
}

plus(8, 60);

// NaN: Not a Number

const player = {
  name: "yeji",
  greeting: function () {
    console.log("hello");
  },
};

console.log(player.name);
player.greeting();

// 변수를 만들 때 항상 const 사용하고, 가끔 필요할 때만 let 사용하기
// let 은 업데이트가 가능하지만, const 는 상수이기에 불가능
// var 는 절대! 쓰지 않을 것

// null: 비어 있음, 변수에 할당할 수 있는 값 (비어 있음 이라는 상태; 의도적)
// undefined: 값이 없음, 변수에 값을 부여하지 않은 상태

const market = ["potato", "tuna", "tomato"];

// [] : array & {} : object

console.log(market);
market[2] = "water"; // 업데이트 가능
console.log(market);
market.push("salmon");
console.log(market);

const days = ["mon", "tue", "wed"]; // meaning 없는 property 저장

const favorites = {
  food: "chicken",
  drink: "apple juice",
  fruit: "strawberry",
  number: 7,
};

console.log(favorites.food, console); // object 의 item 가져오기

// JS 는 이미 나를 위한, 내가 사용가능한 object 를 가지고 있다는 것을 확인

favorites.drink = "coffee"; // object 의 item 업데이트
console.log(favorites);

function pizza(cheese, tomato) {
  // 이 cheese, tomato 는 이 unction body 에서만 사용 가능
  // cheese, tomato 는 이 function 밖에서 접근 불가
  console.log(cheese + tomato);
}

pizza(5, 10);
