var givanString="Good Morning IT Champ";


var index=0;
var count=0;

for (let index = 0; index < givanString.length; index++) {
    
    var char=givanString.charAt(index);

    if(char.includes("a") || char.includes("e") || char.includes("i") || char.includes("o") || char.includes("u") )
     {
        count++;

     }    
    
}
 console.log(`Total number of vovels in given string : ${ count}`);
