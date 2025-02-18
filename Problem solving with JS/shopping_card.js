const shopping = [ 
    {name : 'shampo', price : 400, quantity : 4},
    {name : 'perfume', price : 800,  quantity : 3},
    {name : 'navia', price : 500,  quantity : 2},
    {name : 'kitkat', price : 200,  quantity : 5},
    {name : 'toothpest', price : 200,  quantity : 2}
]
function totalCost(shopping)
{
    let total=0;
    for(let item of shopping)
    {
        let itemTotalPrice = item.price * item.quantity;
        total+=itemTotalPrice;
    }
    return total;
}
const total = totalCost(shopping);
console.log('Total cost : ', total);