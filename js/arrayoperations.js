let array = [1, 2, 3, 4, 5];
let value = new Array(6, 7, 8, 9, 10);
console.log(value);
let fruits = ["apple", "banana", "orange"];
console.log(fruits);// array methods
console.log(array.length);// length method is used to get the length of the array
console.log(fruits[0]);// index method is used to access the element of the array
console.log(fruits.slice(0,3));// slice method is used to get a portion of the array
console.log(fruits[fruits.length - 1]);// to access the last element of the array
console.log(fruits.at(-1)); // at method is used to access the last element of the array
console.log(fruits.push("grape"));// push method is used to add an element to the end of the array
console.log(fruits);
console.log(fruits.pop());// pop method is used to remove the last element of the array
console.log(fruits);
console.log(fruits.unshift("grape"));// unshift method is used to add an element to the beginning of the array
console.log(fruits);
console.log(fruits.shift());// shift method is used to remove the first element of the array
console.log(fruits);
console.log(fruits.splice(1, 0, "grape"));// splice method is used to add or remove elements from the array
console.log(fruits);
console.log(fruits.splice(1, 1));
console.log(fruits);

for(let values of fruits){
    console.log(values);
}// for of loop is used to iterate over the elements of the array

for(let index in fruits){
    console.log(index, ":", fruits[index]);
}// for in loop is used to iterate over the indices of the array