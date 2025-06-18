// console.dir(window.document);
// 1. document.getElement_s_ByTagName --> [] (iterable) (HTML Collection)

// const headings = document.getElementsByTagName("h3");
// console.log("headings:", headings);

// const header = document.getElementsByTagName("header");
// console.log("header:", header)

// headings[0].innertext = "Hello Rishabh!";
// headings[1].innertext = "Hello Mohan!";

// const elements = document.getElementsByClassName("text-brown");
// console.log("elements:", elements);

// const text = document.getElementById("text-1");

// text.style.backgroundColor="lime";

const titles = document.querySelectorAll("h3");

const textBrownElements = document.querySelectorAll(".text-brown");

const textPara = document.querySelectorAll("text-1");

console.log(titles, textBrownElements, textPara);
