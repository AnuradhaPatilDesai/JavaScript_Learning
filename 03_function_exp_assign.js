//area of square
var square=function(n){
 console.log(n*n);
}
console.log("Square of 5");
square(5);

console.log("Square of 6");
square(6);
console.log("Square of 25");
square(25);
console.log("Square of 100");
square(100);
console.log("===========================================");
console.log(typeof square);
console.log("============================================");
console.log("calculate area of triangle");
var areaOfTriangle=function(base,height){
    console.log( 1/2*(base*height));
   }
   console.log("area of triangle");
   areaOfTriangle(45,34);
console.log("==============================================");
console.log("area of reactangle");

var areaOfrectangle=function(length,width){
    console.log( length*width);
   }
   console.log("area of rectangle");
   areaOfrectangle(499,917);
   console.log("===============================================");
   console.log("Swap values");

  var swap_values= function (arg1, arg2)
{
    console.log("==========Before Swap=========");
    console.log(arg1, arg2);
    console.log("======After swap=============");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka");
swap_values("10000", "2000")

