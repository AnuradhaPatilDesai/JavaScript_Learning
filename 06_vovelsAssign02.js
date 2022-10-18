// Count the total number vowels using includes() for string → “I am Very good IT Developer”

console.log("Count the total number of vowels using includes() for string → “I am Very good IT Developer”");
var myString = "I am Very good IT Developer";
var vowelsLoweCase = "aeiou";
var vowelUpperCase = "AEIOU";
var vowelsCount=0;
for (let index = 0; index < myString.length; index++) {
   var char =  myString.charAt(index);
   var isLowerAvailable =  vowelsLoweCase.includes(char);
   var isUpperAvailable =  vowelUpperCase.includes(char);
   if (isLowerAvailable || isUpperAvailable) {
        vowelsCount = vowelsCount + 1;
   }
}
console.log(`Total Vowels count : ${vowelsCount}`);
