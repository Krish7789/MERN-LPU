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


 const arr = ["tata", "mahindra", "suzuki", "hyundai"];

 arr.splice(1, 2,"kia", "byd", "honda"); // removing and adding elements
 arr.splice(1, 1); // removing new elements
 arr.splice(1, 0, "johndeer"); // adding new elements

 console.log(arr);
