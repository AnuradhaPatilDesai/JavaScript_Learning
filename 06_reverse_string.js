var myName="Anuradha";
var lengthstr=myName.length-1;
var reversestr="";
for (let index = lengthstr; index >=0; index--) {
    console.log(myName.charAt(index));
    reversestr=reversestr + myName.charAt(index);
    
}
console.log(reversestr);