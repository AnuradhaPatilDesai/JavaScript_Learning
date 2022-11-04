
console.log("Name:Anuradha Patil");
console.log("___________________________________________________________________________________________");
console.log("----Arrow Function With No Argument and No Return Value-------");
let show =  () => {
    console.log(`"Good Evening,Today is Friday"`);
}
show();
console.log("___________________________________________________________________________________________");
console.log("----Arrow Function With 3 Argument and No Return Value and It Perform Multiplication---------");
let mul = function(n1, n2,n3=1) {
    return n1 * n2*n3;
}
console.log(`Multiplication Of 5,5,2:${ mul(5,5,2)}`);
console.log(`Multiplication Of 10,4:${ mul(10,4)}`);

console.log("___________________________________________________________________________________________");
console.log("----Arrow Function With 5 Argument and  Return Value and It Perform Addition---------");
let add = function(n1, n2,n3,n4,n5) {
    return n1+n2+n3+n4+n5;
}
console.log( `The addition is:${add(100,100,200,349,756)}`);
console.log( `The addition is:${add("I am","Learning","ES6","Feature","in depth")}`);
