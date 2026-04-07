// closures
function outer() {
    let outerVariable = "I am from the outer function";

    function inner() {
        console.log(outerVariable);
    }
    inner();

}
outer();

//iife stands for immediately invoked function expression
(function(){
    console.log("closure");
}() ); // can we reuse iife? no we cannot reuse iife because it is immediately invoked and it does not have a name to call it again

//closure is a function that has access to the parent scope, even after the parent function has closed. It allows us to create private variables and functions that cannot be accessed from outside the closure. It also allows us to create functions that can remember the state of the parent function, even after the parent function has closed.

