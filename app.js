// console.log 가 아닌 return 을 해야하는 이유

const age = 100;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
  // return: function 이 function 밖과 소통하는 방법
}

const krAge = calculateKrAge(age);
// 무언가를 return 하면 계산을 담당하는 function 의 코드는
// 그 function 이 return 하는 값과 같아지게 된다.

console.log(krAge);
