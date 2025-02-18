// function swap (num1, num2)
// {
//     let tmp= num1;
//     num1 =num2;
//     num2 =tmp;
//     return ('num1 : '+ num1 + ' num2 : ' + num2);
// }
// let num1=50, num2=40;
// console.log(swap(num1, num2));

//destructuring

// let num1=50, num2=40;
// console.log('num1 : ', num1 , ' num2 : ' , num2);
// [num1, num2] = [num2, num1];
// console.log('num1 : ', num1 , ' num2 : ' , num2);

//without tmp

let num1=50, num2=40;
console.log('num1 : ', num1 , ' num2 : ' , num2);
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log('num1 : ', num1 , ' num2 : ' , num2);