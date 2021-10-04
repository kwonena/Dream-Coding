// false: 0, -0, '', null, undefined(데이터가 없고 비어있는 것들)
// true: -1, 'hello', [](비어있는 배열 또한 object 자체이기 때문에 true)
if (undefined) {
    console.log('true!');
} else {
    console.log('false');
}

let num; // undefined
if (num) {
    console.log('true!');
}

// AND연산자(&&)는 앞이 true가 되어야 실행
// 위의 if문과 동일한 문장
num && console.log(num);