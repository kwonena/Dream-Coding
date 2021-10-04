// 하나의 class로 다양한 object를 만들어서
// 서로 다른 기능을 수행하는 object를 만들 수 있고
// class의 재사용성이 높아진다
class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  // class에서 함수 선언시 function을 붙이지 않아도 됨
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

const coolCounter = new Counter(printSomething);
// printSomething을 호출하지 않으면 undefined로 에러 발생

function printSomething(num) {
  console(`yo! ${num}`);
}

function alertNum(num) {
  alert(`alert ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);
