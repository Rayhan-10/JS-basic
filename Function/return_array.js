function evenArray (ar)
{
    const ar2 = [];
    for(let num of ar)
    {
        if(num % 2 === 0)
        {
            ar2.push(num);
            // ar2.unshift(num);
        }
    }
    return ar2;
}

const ar = [10,15, 20,25,30,35,40,45,50,55,60,65,70];
const ar2= evenArray(ar);
for(let num of ar2)
    {
        console.log(num);
    }
