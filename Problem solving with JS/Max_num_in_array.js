//max

// function maxNumInArray (ar)
// {
//     let max =ar[0];
//     for(let num of ar)
//     {
//         if(num > max)
//         {
//             max =num;
//         }
//     }
//     return max;
// }
// const ar =[10,30,40,5,90,10,400,30,45];
// const max = maxNumInArray(ar);
// console.log("Max num in array is : ", max);

//Min

function minNumInArray (ar)
{
    let min =ar[0];
    for(let num of ar)
    {
        if(num < min)
        {
            min =num;
        }
    }
    return min;
}
const ar =[10,30,40,5,90,1,10,400,30,45];
const min = minNumInArray(ar);
console.log("Max num in array is : ", min);