const age = 10;
// if(age >= 18)
// {
//     console.log("adult");
// }
// else
// {
//     console.log("Not adult");
// }

//  Now in ternary ==>
// (age>=18)? console.log("adult") :console.log("NOt adult");

// let price =600;
// const isLeader=true;
// if(isLeader == true)
// {
//     price=0;
// }
// else{
//     price+=100;
// }

// console.log(price);

// now in ternary ==>
// let price = 600;
// const isLeader = false;
// price = isLeader === true ? price = 0 : price + 100;
// console.log(price); 

//semi-advanced ternary
// let price = 500;
// const isLeader = false;
// if(isLeader == true)
// {
//     if(price >= 500)
//     {
//         price/=2;
//     }
//     else{
//         price=0;
//     }
//     console.log(price);
// }
// else{
//     console.log("Tui neta na shor");
// }
let price = 800;
const isLeader = true;

price = isLeader == true 
    ? (price >= 500 ? price / 2 : 0) 
    : (console.log("Tui neta na shor"), price);

console.log(price);
