var global_variable = 300;
function outer() {
    let outer_fun_variable = 100;
    let inner_fun = function() {
        let inner_fun_variable = 200;
        console.log(inner_fun_variable, outer_fun_variable, global_variable);
    }
    return inner_fun;
}
let returnValue = outer();
returnValue();


function display() {
    console.log("display function");
}

setInterval( display, 2000);
