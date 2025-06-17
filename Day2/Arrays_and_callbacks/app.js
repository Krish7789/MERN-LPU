// const arr = ["tata", "mahindra", "suzuki", "hyundai"];
// console.log(arr);

// const arr1 = ["tata", "mahindra", "suzuki", "hyundai"];
// const arr2 = ["kia", "byd", "mitsubishi"];
// console.log(arr1)

// //READ 1
// const company = arr[1];
// console.log(company);

// // 2
// const [a,b,c] = arr1;
// console.log(arr1);


// const arr = ["tata", "mahindra", "suzuki", "hyundai"];

// arr.push("Honda");

// arr.shift();// to remove

// arr.unshift("kia");// to add

// console.log(arr);


//  const arr = ["tata", "mahindra", "suzuki", "hyundai"];

//  arr.splice(1, 2,"kia", "byd", "honda"); // removing and adding elements
//  arr.splice(1, 1); // removing new elements
//  arr.splice(1, 0, "johndeer"); // adding new elements

//  console.log(arr);

// const arr = ["ab", "xy", "mn", "ab", "pq"];
// indexOf("ab") --> 0
// lastIndexOf("ab") --> 3
// indexOf("xy") --> 1

// includes("xy") --> true

// if(arr.indexOf("ab") == -1){
//     console.log("Present");
// }else{
//     console.log("Absent");
// }

// const arr = [
//     {name: "Likhilesh", city: "Delhi"},
//     {name: "Abhinav", city: "Kanpur"},
//     {name: "Sumedh", city: "Mumbai"},
// ];

// const myFunc = (a) => {
//     if(a.name === "Abhinav") return true;
//     return false;
// };

// const ans = arr.find(myFunc);

// console.log(ans);

const arr = [
    {name: "Likhilesh", city: "Delhi", score: 33},
    {name: "Abhinav", city: "Kanpur", score: 24},
    {name: "Sumedh", city: "Mumbai", score: 42},
];

const myFunc = (elem) => {
    if(elem.score < 25){
        return { ...elem, remark: "fail" };
    }else{
        return { ...elem, remark: "pass"};
    }
};

const resArr = arr.map(myFunc);
console.log("resArr: ",resArr);
