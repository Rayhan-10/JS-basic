// reverse

// way-1:

// const sentence = 'I want to learn web development';
// let reverse = '';
// for(const letter of sentence)
// {
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);

// way-2

// const sentence = 'I want to learn web development';
// let reverse ='';
// for(let i=0; i<sentence.length; i++)
// {
//     reverse= sentence[i] + reverse;
// }
// console.log(reverse);

// way-3 shortcut

const sentence = 'I want to learn web development';
let reversed = sentence;
console.log(reversed.split('').reverse().join(''));


