const mobiles = [
    {name : 'samsung', price : 30000, camera: '12mp', color : 'black'},
    {name : 'xaomi', price : 32000, camera: '20mp', color : 'blue'},
    {name : 'OPPO', price : 45000, camera: '45mp', color : 'black'},
    {name : 'Nokia', price : 10000, camera: '5mp', color : 'black'},
    {name : 'Pixel', price : 80000, camera: '50mp', color : 'black'}
]

// function minNumInArrayObject (mobiles)
// {
//     let min = mobiles[0];
//     for(let phone of mobiles)
//     {
//         if(phone.price < min.price)
//         {
//             min = phone;
//         }
// }
// return min;
// }

// const cheap = minNumInArrayObject(mobiles);
// console.log('Cheapest phone is : ', cheap);

function maxNumInArrayObject (mobiles)
{
    let max = mobiles[0];
    for(let phone of mobiles)
    {
        if(phone.price > max.price)
        {
            max = phone;
        }
}
return max;
}

const max = maxNumInArrayObject(mobiles);
console.log('high price phone is : ', max);