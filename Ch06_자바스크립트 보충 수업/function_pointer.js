function add(num1, num2) {
    return num1 + num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// doSomething은 add의 reference 주소값을 참조
const doSomething = add;

const result = doSomething(2, 3);
console.log(result);
const result2 = add(2, 3);
console.log(result2); // 두 개의 값이 같은 값으로 출력됨

// 인자를 받지 않는 함수는 input 불가능
function print() {
    console.log('print');
}

// 함수를 전달하는 것은
// 그 함수가 가지고 있는 reference를 전달하는 것과 동일
function surprise(operator) {
    const result3 = operator(2, 3); // add(2, 3)을 호출한 것과 동일
    console.log(result3);
}

surprise(add); // 2 + 3
surprise(divide); // 2 / 3