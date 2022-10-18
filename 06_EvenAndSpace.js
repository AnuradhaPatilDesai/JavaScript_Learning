console.log("Even positioned chars on console");
function evenPositionedChars(myString){
    for (let index = 0; index < myString.length; index++) {
       // console.log(index%2==0);
       var chh = myString.charAt(index);
       if ((index+1)%2== 0 && chh!=" ") {
          console.log(chh);
       }
       //var chh = myString.charAt(index);
        
    }
}
console.log(`Even positioned chars not consider empty spaces for string : "Hard work always pays back"`);
evenPositionedChars("Hard work always pays back");
console.log(`Even positioned chars not consider empty spaces for string :"Soon I will be Angular IT Champ"`);
evenPositionedChars("Soon I will be Angular IT Champ");

console.log("----------------------------------------------------------------------------");
console.log("Odd positioned chars on console");
function oddPositionedChars(myString){
   for (let index = 0; index < myString.length; index++) {
      // console.log(index%2==0);
      var chh = myString.charAt(index);
      if ((index+1)%2!=0 && chh!=" ") {
         console.log(chh);
      }
      
       
   }
}
console.log(`odd positioned chars not consider empty spaces for string : "Hard work always pays back"`);
oddPositionedChars("Hard work always pays back");
console.log(`odd positioned chars not consider empty spaces for string :"Soon I will be Angular IT Champ"`);
oddPositionedChars("Soon I will be Angular IT Champ");