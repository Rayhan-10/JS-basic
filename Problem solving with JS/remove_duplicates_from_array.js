// Remove duplicate items from an array

function removeDuplicateNum(numbers)
{
    const noDuplicate =[];
    for(const num of numbers )
    {
        if(noDuplicate.includes(num) === false)
        {
            noDuplicate.push(num);
        }

    }
    return noDuplicate;
}
const numbers = [15,23, 15, 67,79,23,44,15,21,67];
const numbers2 = removeDuplicateNum(numbers);
console.log(numbers2);