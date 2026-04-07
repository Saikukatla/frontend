function greet(){
    console.log("Hello World")
}
greet();

let sum = function add(a,b){
    console.log(a+b);
}
sum(5,10);

let product = function(a,b){
    console.log(a*b);
}
product(5,10);

function desk(a,b){
    return a/b;
}
console.log(desk(10,5));

function ord(a,b){
    console.log(a-b);
     console.log(a+b);
     console.log(a*b);
    
}
ord(10,5);

function desk(a,b,c){
    console.log(a+b+c);
    console.log(a+b);
    console.log(a+c);

}
desk(10,5);

function desk(a,b=25,c=30){
    console.log(a+b+c);
    console.log(a+b);
    console.log(a+c);

}
desk(10);
