// number, string, boolean, null, undefined
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2); // number2의 값이 업데이트 됨

// object
let obj = {
    name: 'ena',
    age: 24,
};
console.log(obj.name);

let obj2 = obj; // 가르키는 주소만 복사됨
console.log(obj2.name);

obj.name = 'ellie';
console.log(obj.name);
console.log(obj2.name); // 둘다 ellie로 값이 나옴

// const는 정의한 값을 다시 변경할 수 없음
// Why? object는 const로 정의해도 값을 변경할 수 있는걸까?
const object = {
    name2: 'ena',
    age2: 24,
};
// object의 reference 값 자체는 변경 불가능
// object = {
//     name2: 'ellie',
//     age: 25,
// };

// But, reference가 가르키는 값은 변경 가능하기 때문
object.name2 = 'ellie';
console.log(object.name2);