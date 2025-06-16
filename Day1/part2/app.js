// let juice = 50;
// let gstOnJuice = 0.1;
// let fries = 70;
// let gstOnFood = 0.05;

// let juiceBillAmount = juice + gstOnJuice*juice;
// let friesBillAmount = fries + gstOnFood*fries;

// const finalBill = juiceBillAmount + friesBillAmount;
// console.log(finalBill);

// let age = 22;
// console.log("START", age);

// // 1. fucntion declaration
// function calculateJuiceBillAmount (){
//     let juice = 50;
//     let gstOnJuice = 0.1;
//     let juiceBillAmount = juice + juice * gstOnJuice;
//     console.log(juiceBillAmount);
// }

// console.log("MID");

// calculateJuiceBillAmount();

// console.log("END");

// function calculateJuiceBillAmount(juice) { //parameter
   
//     let gstOnJuice = 0.1;
//     let juiceBillAmount = juice + juice * gstOnJuice;
//     console.log(juiceBillAmount);
// }

// calculateJuiceBillAmount(60); //argument

// calculateJuiceBillAmount(50); //argument

// calculateJuiceBillAmount(110); //argument

// function printBill(name, amount) {
//     console.log("---------");
//     console.log("Your bill for", name);
//     console.log("-> RS.", amount);
//      console.log("---------");
// }

// function calculateBillAmount(price, gst) {
//     console.log("...calculating...");
//     let billAmount = price + price * gst;
//     return billAmount;
// }

// let res1 = calculateBillAmount(60, 0.1); // argument
// printBill("Mango Juice", res1);
// const res2 = calculateBillAmount(50, 0.1); // argument
// printBill("Orange Juice", res2);
// const res3 = calculateBillAmount(110, 0.05); // argument
// printBill("Fries", res3);

let res1 = calculateBillAmount(60, 0.1); // argument
printBill("Mango Juice", res1);

function printBill(name, amount) {
    console.log("---------");
    console.log("Your bill for", name);
    console.log("-> RS.", amount);
     console.log("---------");
}

function calculateBillAmount(price, gst) {
    console.log("...calculating...");
    let billAmount = price + price * gst;
    return billAmount;
}

const res2 = calculateBillAmount(50, 0.1); // argument
printBill("Orange Juice", res2);
const res3 = calculateBillAmount(110, 0.05); // argument
printBill("Fries", res3);

function printBill(name, amount) {
    console.log("---------");
    console.log("Your bill for", name);
    console.log("-> $", amount);
     console.log("---------");
}