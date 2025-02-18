function sumOfArray(ar)
{
    let sum=0;
    // for(let num of ar)
    // {
    //     sum+=num;
    // }
    for(let i=0; i< ar.length; i++)
    {
        sum+=ar[i];
    }
    return sum;
}
const ar = [10,20,30,40,50,60,70,80,90,100];
let sum =  sumOfArray(ar);
console.log(sum);