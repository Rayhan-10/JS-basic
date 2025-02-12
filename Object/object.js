// // const name = "Rayhan";
// // const age = 20;
// // const university = "Port city international university";
// // const subject = ["Algorithm", "Data structure", "DLD", "OSC"];
// // console.log(typeof(subject));
// // object declare

// // const student = {
// //     name : "Rayhan",
// //     age : 20,
// //     university : "Port city international university",
// //     isPassed : true
// // }
// // const subject = {
// //     name: "Algorithm",
// //     teacher : "Siam sir",
// //     examDate : "20 september",
// //     chapters : ["bubble sort", "quick sort", "Linear search"]
// // }

// // Dot notation

// // console.log(subject.name, subject.chapter);
// // const subjectName =  subject.name;
// // console.log(subjectName);
// const subject = {
//     name: "Algorithm",
//     teacher : "Siam sir",
//     examDate : "20 september",
//     'subjects chapters' : ["bubble sort", "quick sort", "Linear search"]
// }

// //bracket notation

// // console.log(subject['examDate']);
// // const subjects = subject["subjects chapters"]
// // const subjectName =  subject['chapters'];
// // console.log(subjectName);

// subject.name= 'Data structure';
// subject['examDate'] = "20 March";
// console.log(subject.examDate);

// const subName = 'examDate';
// subject[subName] = "30 June";
// console.log(subject);


const computer ={
    brand : 'HP',
    price : 35000,
    processor : 'Intel',
    hdd : '512 GB',
    Ram : '8 GB'
}
// const keys = Object.keys(computer);
// console.log(keys);
const values = Object.values(computer);
console.log(values);