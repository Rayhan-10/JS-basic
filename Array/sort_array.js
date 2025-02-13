// const numbers=[8,1,9,4,2,7,3,6,5];


// //using sort functon

// const sorted_numbers = numbers.sort();
// console.log(numbers);

// sort in ascending order without error


// const numbers = [8,1,2,12, 57,39,7,3,6,5];
// const sorted_numbers = numbers.sort( function(a,b){ return a-b });
// console.log(sorted_numbers);

// sort in descending order without error
const numbers = [8,1,2,12, 57,39,7,3,6,5];
const sorted_numbers = [...numbers].sort( function(a,b){ return b-a });
console.log(sorted_numbers);
console.log(numbers);

// let max=numbers[0];
// // for(let i=1; i<numbers.length; i++)
// // {
// //     if(max < numbers [i] )
// //     {
// //         let tmp = max;
// //         max = numbers[i];
// //         numbers[i] = tmp;
// //     }
// // }
// // for(const num of numbers)
// // {
// //     console.log(num);
// // }