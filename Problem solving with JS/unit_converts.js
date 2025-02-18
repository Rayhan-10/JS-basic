// function inchToFeet(inch)
// {
//     const feet = inch / 12;
//     return feet;
// }

// inch to feet
// function inchToFeet(inch)
// {
//     const feetFraction = inch / 12;
//     const feet = parseInt(feetFraction);
//     const inchRemaining = inch % 12;
//     const result = feet + ' Feet ' + inchRemaining + ' inch';
//     return result;

// }    
// let inch = 65;
// const feet = inchToFeet(inch);
//  console.log(feet);

//Miles to Kilometers

// function milesTOKilo (miles) 
// {
//     const kilo = miles * 1.609344;
//     return kilo;
// }
// const miles = 10;
// const kilo = milesTOKilo(miles);
// console.log(kilo);

//Kilometers to Miles
function kiloToMiles (kilo) 
{
    const mile = kilo * 0.62137119;
    return mile;
}
const kilo = 5;
const miles = kiloToMiles(kilo);
console.log(miles);
