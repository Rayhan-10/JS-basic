//even check
// let num= 1;
// while(num <= 20)
// {
//     if(num % 2 ==0)
//     {
//         console.log(num + " is even");
//     }
//     num++;
// }

// odd check
// while(num <= 20)
//     {
//         if(num % 2 != 0)
//         {
//             console.log(num + " is odd");
//         }
//         num++;
//     }
// divisible by 5
// for(let i=1; i<30; i++)
// {
//     if(i % 5 === 0)
//     {
//         console.log(i + " is divisible by  5");
//     }
// }
// for(let i=1; i<30; i++)
//     {
//         if(i % 3 === 0 && i % 5 === 0)
//         {
//             console.log(i + " is divisible by  both 3 & 5");
//         }
//     }
// let sum=0;
// for(let i=1; i<30; i++)
//     {
//         if(i % 3 === 0 || i % 5 === 0)
//         {
//             sum+=i;
//         }
//     }
//     console.log(sum);

// for(let i=0; i<50; i++)
// {
//     console.log(i);
//     if(i === 5)
//     {
//         console.log("30 is ", i, "th index");
//         break;
//     }  
// }
for(let i=1; i<=10; i++)
{
    if(i % 2 === 1)
    {
        continue;
    }
    console.log(i);
}

