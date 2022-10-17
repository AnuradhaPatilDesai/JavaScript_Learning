console.log("----------------------------------------------------------");
console.log("--WAP in JavaScript to check given number is even or odd--");

function isEvenOdd(num1) {

    if (num1 % 2 == 0) {
        console.log(` The given number ${num1} :"Even"`);
    }
    else {
        console.log(` The given number ${num1} :"Odd"`);
    }

}
isEvenOdd(45);
isEvenOdd(70);
isEvenOdd(67);
isEvenOdd(98);
console.log("----------------------------------------------------------");
console.log("--WAP in JavaScript to check person is eligible for vote or not--");


function isEligible(age) {
    if (age >= 18) {
        console.log(`Hey your age is ${age} So you are eligible for Vote`);
    }
    else {
        console.log(`Hey your age is ${age} So you are Not eligible for Vote `);
    }

}
isEligible(18);
isEligible(20);
isEligible(17);
isEligible(40);
console.log("----------------------------------------------------------");
console.log("--WAP in JavaScript to Check string contain more than 10 character or not");


function checks(str) {
    var strlength = str.length;


    if (strlength >= 10) {
        console.log(`String  ${str}  contain more than 10 character`);
    }
    else {
        console.log("String Not contain more than 10 character");
    }
}
checks("JavaScript-ES6");
console.log("----------------------------------------------------------");
console.log("--WAP in JavaScript to Check string starts with Java ");


function startsWith(str) {
    var str1 = str.includes("Java");

    if (str1 == true) {
        console.log("Given string stars with Java");
    }
    else {
        console.log("Given string not with Java");
    }
}
startsWith("JavaScript Language");