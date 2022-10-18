
function reverseString(givenString) {
    var lengthstr=givenString.length-1; 
    var reversestr="";
for (let index = lengthstr; index >=0; index--) {
    
    
   
    givenString.charAt(index);
    reversestr=reversestr + givenString.charAt(index);
    
}
console.log(reversestr);
    
}
console.log(` Reverse the string :" Hard work always pays back"`);
reverseString("Hard work always pays back");
console.log(` Reverse the string :"Soon I will be Angular IT Champ"`);
reverseString("Soon I will be Angular IT Champ");


console.log("--------------------------------------------------------------");
console.log("ignore spaces while reversing");
function reverseString(givenString) {
    var lengthstr=givenString.length-1; 
    var reversestr="";
for (let index = lengthstr; index >=0; index--) {
 

    reversestr=givenString.split(" ").reverse().join("");
   
    
}
console.log(reversestr);
    
}
console.log(` Reverse the string :" Hard work always pays back"`);
reverseString("Hard work always pays back");
 console.log(` Reverse the string :"Soon I will be Angular IT Champ"`);
 reverseString("Soon I will be Angular IT Champ");

