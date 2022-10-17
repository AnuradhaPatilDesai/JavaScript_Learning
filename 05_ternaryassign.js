var count=function(num1 ,num2)
{
    console.log("-------1-----------");
 var result = num1 > num2? num1 : num2;
 console.log(`The given number is greater : ${result}`);
 
}
count(10,-10);
count(800,899);
console.log("-------2.1-----------");
var checkNumEvenOdd=function(num1)
{
  var result= num1%2==0 ? true: false;
  console.log(` The given number is Even : ${num1}:${result}`);
}
checkNumEvenOdd(29);
checkNumEvenOdd(44);
checkNumEvenOdd(0);
checkNumEvenOdd(101);

console.log("-------3.1-----------");
var isEvenOrOdd=function(num1)
{
  var givenStrLength=num1.length;
  //console.log(givenStrLength);
  result= givenStrLength%2==0 ? "Even": "Odd";
  console.log(` The given string is : ${num1} : ${result}`);

}
isEvenOrOdd("JavaScript");
isEvenOrOdd("google");
isEvenOrOdd("Developer");

