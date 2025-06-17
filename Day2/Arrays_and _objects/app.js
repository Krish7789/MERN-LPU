// // const cse018 = {
// //     name: "Krish",
// //     address: "Jalandhar, PB",
// //     bloodGroup: "B+",
// // };

// // console.log(cse018);

// // const cse75 = {
// //     name: "Shrinivas",
// //     address: "Hyderabad, TS",
// //     bloodGroup: "O+",
// // };

// // console.log(cse75);

// const cse018 = {
//     name: "Krish Thapa",
//     address: "Jalandhar, PB",
//     bloodGroup: "B+",
// };

// // READ THE VALUE OF PROPERTY
// const studentName = cse018.name;
// console.log("studentName:", studentName);

// // UPDATE THE VALUE OF PROPERTY
// cse018.bloodGroup = "A-";

// //ADD A KEY-VALUE PAIR
// cse018.college = "LPU";

// //DELETE
// delete cse018.address;

// console.log("cse018:", cse018);

// const person = {
//     name: "Krish",
//     height: 1.7, //metres
//     weight: 78, //kg
//     college: "LPU",
//     rollNumber: 15,
//     getBMI: function(){

//         console.log(this.height, this.weight); //height & weight
//     },
// }

// person.getBMI();

// person.weight = 90;

// person.getBMI();

// const allKeys = Object.keys(person);
// console.log("allKeys:", allKeys);
// const allValues = Object.values(person);
// console.log("allKeys:", allKeys);
// const allEntries = Object.entries(person);
// console.log("allKeys:", allKeys);


//-------------------------Dynamic Value Access----------------------------
// const person = {
//     name: "Krish",
//     height: 1.7, //metres
//     weight: 78, //kg
//     college: "LPU",
//     rollNumber: 15,
// };

// //READ
// const whichkey = prompt("What value do you want?");
// console.log("whichkey:", whichkey);
// const clg = person[whichkey];
// console.log(clg);

//----------------------------------

// const person1 = {
//     name: "Krish",
//     height: 1.7, //metres
//     weight: 78, //kg
//     college: "LPU",
//     rollNumber: 15,
// };

// const person2 = person1

// person2.name = "Raj";

// console.log("person1", person1);
// console.log("person2", person2);

//------------------------------

// const person1 = {
//     name: "Krish",
//     height: 1.7, //metres
//     weight: 78, //kg
//     college: "LPU",
//     rollNumber: 15,
// };

// //-----------De-structuring

// const { weight, college } = person1;
// console.log(": --->:", weight, college);

//----------------------------------
const person1 = {
    name: "Krish",
    height: 1.7, //metres
    weight: 78, //kg
    college: "LPU",
    rollNumber: 15,
    marks: {
        EVS: 42,
        maths: 25,
    },
};

const person2 = { ...person1 };

person2.name = "Rajesh";

