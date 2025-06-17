// const cse018 = {
//     name: "Krish",
//     address: "Jalandhar, PB",
//     bloodGroup: "B+",
// };

// console.log(cse018);

// const cse75 = {
//     name: "Shrinivas",
//     address: "Hyderabad, TS",
//     bloodGroup: "O+",
// };

// console.log(cse75);

const cse018 = {
    name: "Krish Thapa",
    address: "Jalandhar, PB",
    bloodGroup: "B+",
};

// READ THE VALUE OF PROPERTY
const studentName = cse018.name;
console.log("studentName:", studentName);

// UPDATE THE VALUE OF PROPERTY
cse018.bloodGroup = "A-";

//ADD A KEY-VALUE PAIR
cse018.college = "LPU";

//DELETE
delete cse018.address;

console.log("cse018:", cse018);