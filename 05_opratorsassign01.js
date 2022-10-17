 var wordLengthSquare= function (arg)
 {
   var givenStrLength=arg.length;
   console.log( `Length of given string is :  ${givenStrLength}`);
   return givenStrLength*givenStrLength; 
 }
 

 console.log(` Square of string is :  ${wordLengthSquare("JavaScript")}`);
 console.log("-----------------------------------------------------------");
 console.log(` Square of string is :  ${wordLengthSquare("google")}`);
 console.log("-----------------------------------------------------------");
 console.log(`Square of string is : ${wordLengthSquare("Developer")}`);

 console.log("----Que.2----");
 var givenStr1="I am Angular Developer";
 console.log(givenStr1);
 console.log("----Que-2.1----");

   
   var Rev=givenStr1.split(" ").reverse().join("");
   console.log(Rev);
  //  var reverseStr=Rev.reverse();
  //  console.log(reverseStr);

   console.log("----Que-2.2----");

   var strLength=givenStr1.length;
   console.log(`Given string length : ${strLength}`);
   var split_var=givenStr1.split(" ");
   var wordsInStr=split_var.length;
   console.log(`Words in this string are : ${wordsInStr}`);

   var Div=strLength/wordsInStr;
   console.log(`Division is : ${Div}`);

   console.log("----Que-2.3----");

   var mul=strLength*wordsInStr;
   console.log(`Multiplication is : ${mul}`);





