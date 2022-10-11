var stringHandsOn=function()
{
   console.log("-------------1---------");
   var givenString="   Hey you are doing good,keep it up    ";
   console.log(`Given string is: ${givenString} `);
   console.log("-------------2---------");
   console.log(`Length of given string is:${givenString.length}`);

   console.log("----------3------------");
   var trimResult = givenString.trim();
   //console.log(trimResult);
   console.log(`After removeing leading and trailing extra spaces:  ${trimResult}`);

   console.log("------------4----------");
   var spaces=givenString.length-trimResult.length;
   console.log(`After removeing extra spaces:${spaces}`);


   console.log("------------5----------");
   
   // console.log(trimResult.charAt(0));
   // console.log(trimResult.charAt(trimResult.length-1)   );
   console.log("First character: "+trimResult.charAt(0)+"   Last character:"+trimResult.charAt(trimResult.length-1));

   console.log("----------6------------");
   var commasepword=trimResult.split(",");
   console.log(commasepword);
   var count=commasepword[0].split(" ").length+commasepword[1].split(" ").length;
   console.log("Count of total words after trim():"+count);

   console.log("----------7------------");
   console.log(`indexOf word "good" : `+givenString.indexOf("good"));

   console.log("----------8------------");
   console.log("Using substring starting from index 22 : "+trimResult.substring(22,trimResult.length));
   console.log("Using slice starting from index 22 : "+trimResult.slice(22,trimResult.length))

   console.log("----------9------------");
   console.log(`check string ends with "up" : `+trimResult.includes("up"));

   console.log("----------7------------");
   console.log(`check string starts with "Hey" : `+trimResult.includes("Hey"));

}
stringHandsOn();
