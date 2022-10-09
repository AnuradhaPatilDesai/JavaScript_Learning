function noArgument(){
    console.log("my class name is CODEMIND TECHNOLOGY");
    console.log("I am learning Anguler 8")
}
noArgument();
console.log("==================================");

//concatnation 
function myDetails(firstName,lastName){
  var fullName=firstName.concat(lastName);
  return fullName;


}
var fullName=myDetails("anuradha","patil");
console.log(fullName);

console.log("---------------------------------------");
//swapping function
function swap_values(arg1, arg2)
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


console.log("====addition====");
function add_three_numbers(a, b, c)
{
    console.log(a+b+c);
    

}
add_three_numbers(10,23,600,40);
add_three_numbers("Hello", "Good", "Morning");
