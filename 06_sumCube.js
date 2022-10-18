console.log("write a program in javascript to count total number of sum of cube from 1 to 5 using function ");
var sumSquare=function()
{
var result = 0;
    for (var i = 1; i <= 5; i++) {
        result +=i*i*i;
    }
    console.log(`total number of sum of cube from 1 to 5 using function : ${result}`);
}
sumSquare();