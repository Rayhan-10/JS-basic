function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function calculator(num1, num2, operation) {
    if (operation === 'add') {
        let result = add(num1, num2);
        return result
    }
    else if (operation === 'sub') {
        let result = sub(num1, num2);
        return result
    }
    else if (operation === 'mul') {
        let result = mul(num1, num2);
        return result
    }

    else if(operation === 'div')
     {
            let result = div(num1, num2);
            return result;
        }
     else {
        return "only add, sub, mul, div operation allowed";
    }
}
const result = calculator(30, 5, 'pow');
console.log(result);