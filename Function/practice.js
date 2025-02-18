// function avg(ar)
// {
//     let sum =0;
//     for(let num of ar)
//     {
//         sum+=num;
//     }
//     const average = sum/ar.length;
//     return average;

// }
// const ar = [10,20,30,40,50,60,70,80,90,100];
// const average =  avg(ar);
// console.log(average);
// function countZero(str)
// {
//     let count =0;
//     for(let letter of str)
//     {
//         if(letter === '0')
//         {
//             count++;
//         }
//     }
//     return count;

// }
// const str = '0100010001'
// const totalZero =  countZero(str);
// console.log(totalZero);
function isEvenOdd(num)
{
    if(num %2 === 0)
    {
        return 'Even';
    }
    return 'odd';
}

const str = isEvenOdd(55);
console.log(str);