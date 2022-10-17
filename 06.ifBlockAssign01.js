 
 console.log("--------------Check condition by using ternary operator---------");
 function maleMarriageEligibility(gender,age,boyName)
{
    var result = age>=21 ? `Hey ${boyName} you are eligible for Marriage` : ` Hey ${boyName} you are Not Eligible for Marriage`;
    console.log(result);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log("--------------Check condition by using if block---------");

function femaleMarriageEligibility(gender,age,girlName)
{
   
    if(age>=18 && gender=="Female")
    {
       console.log( `Hey ${girlName} you are eligible for Marriage`); 
    }
    else{
    
        console.log(`Hey ${girlName} you are Not Eligible for Marriage`);
    
    }
    
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");