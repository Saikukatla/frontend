let value = "scopes of javaScript";

function add() {
    
    console.log(value);//global scope
}
add();
console.log(value);//global scope



function local(){
    let name = "local scope";
    console.log(name);
}
local();
// console.log(name);//error name is not 


function block(){
    if(true){
        let a = 10;
        console.log(a * a);
    }
}
block();
// console.log(a);//error a is not defined

//hoist is the default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).


hoist();
function hoist(){
    console.log("hoisting");
}

console.log(num);//function declaration is hoisted
var num = 10;
//difference between let,cont and var
//let: block scope, not hoisted, cannot be redeclared, can be updated
//const: block scope, not hoisted, cannot be redeclared, cannot be updated
//var: function scope or global scope, hoisted, can be redeclared, can be updated
// scope of variables: global scope, function scope, block scope 