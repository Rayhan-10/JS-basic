function getAge (person)
{
    const age = person.age;
    return age;
}

const age = getAge({
    name : 'Rayhan',
    age : 50,
    height : 5.5,
    weight : 50
})
console.log("age :", age);