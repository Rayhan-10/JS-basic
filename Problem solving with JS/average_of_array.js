//Average of the odd numbers in an array 

// function averageOfOddNum(numbers)
// {
//     let sum=0, count=0;;
//     for(let num of numbers)
//     {
//         if(num % 2 != 0)
//         {
//             sum+=num;
//             count++;
//         }
//     }
//     const avg = sum/count;
//     return avg;

// }
function averageOfOddNum(numbers)
{
    const odd=[];
    for(let num of numbers)
    {
        if(num % 2 === 1)
        {
            odd.push(num);
        }
    }
    let sum=0;
    for(let num of odd)
        {
            sum+=num;
        }
    const avg = sum/odd.length;
    return avg;

}
const numbers = [15,24, 23, 67,79,65,44,30,21,49];
const avg = averageOfOddNum(numbers);
console.log('Average of the odd numbers of array : ', avg);