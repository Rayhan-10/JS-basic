// function discountPrice(quantity) {
//     if (quantity <= 100) {
//         const totalCost = quantity * 100;
//         return totalCost;
//     }
//     else if (quantity <= 200) {
//         const totalCost = quantity * 90;
//         return totalCost;
//     }
//     else {
//         const totalCost = quantity * 70;
//         return totalCost;
//     }

// }
// const quantity = 150;
// const totalCost = discountPrice(quantity);
// console.log('Total cost is : ', totalCost);


// multi layered
function discountPrice(quantity) {
    if (quantity <= 100) {
        const totalCost = quantity * 100;
        return totalCost;
    }
    else if (quantity <= 200) {
        let firstDiscount =  (quantity-100);
        let firstCost = firstDiscount*90;
        let secondDiscount = (quantity - firstDiscount);
        let secondCost = firstDiscount*90;
        let totalCost = firstCost + secondCost; 
        return totalCost;
    }
    else {
        let firstDiscount =  (quantity-200);
        let firstCost = firstDiscount*70;
        let secondDiscount = ((quantity - firstDiscount)-100);
        let secondCost = secondDiscount*90;
        let thirdDiscount = ((quantity - firstDiscount)-100);
        let thirdCost = thirdDiscount*100;
        let totalCost = firstCost + secondCost + thirdCost;
        return totalCost;
    }

}
const quantity = 250;
const totalCost = discountPrice(quantity);
console.log('Total cost is : ', totalCost);
