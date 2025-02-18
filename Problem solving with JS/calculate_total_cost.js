const shopping = [ 
    {name : 'shampo', price : 400},
    {name : 'perfume', price : 800},
    {name : 'navia', price : 500},
    {name : 'kitkat', price : 200},
    {name : 'toothpest', price : 200}
]

function totalCost(shopping)
{
    let total=0;
    for(let item of shopping)
    {
        total+=item.price;
    }
    return total;
}
const total = totalCost(shopping);
console.log('Total cost : ', total);