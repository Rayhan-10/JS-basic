const college = {
    name: 'Natore dem',
    class: ['6', '7', '8', '9', '10'],
    events: ['Science fair', 'national day', '21 february'],
    dressColor: 'blue',
    gpa: 5,
    merit: 'Top'
}

// for(const keys in college)
// {
//     console.log(keys);
//     console.log(college[keys]); // object er property er value dekanor jonno
// }

const keys = Object.keys(college);
// console.log(keys);
 for (const key of keys)
 {
    console.log( key , ' : ', college[key]);
 }