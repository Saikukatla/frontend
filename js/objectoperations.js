// defining an object to represent a product with various properties and nested objects
// Object Operations in JavaScript
// Object Creation and Access
// Creating an object to represent a product
// The product object has properties like name, price, brand, features (which is an array), and details (which is another object)
// Accessing the properties of the product object using dot notation and bracket notation
const product = {
    name: "Laptop",
    price: 999.99,
    brand: "TechBrand",
    features: ["16GB RAM", "512GB SSD", "Intel i7 Processor"],
    details: {
        rating: 4.5,
        warranty: "2 years",
        returnPolicy: "30 days"
    }
}
console.log(product); // Output: { name: 'Laptop', price: 999.99, brand: 'TechBrand', features: [ '16GB RAM', '512GB SSD', 'Intel i7 Processor' ] }
console.log(product.name); // Output: Laptop
console.log(product.price);// Output: 999.99
console.log(product.features[0]);// Output: 16GB RAM
console.log(product.details.rating);// Output: 4.5
console.log(product.details.warranty);// Output: 2 years
console.log(product.details.returnPolicy);// Output: 30 days    


//
const employee = {
    id : 1,
    name : "John Doe",
    position : "Software Engineer",
    department : "IT",
    salary : 75000,
    contact : {
        email : "jhone2021@gmail.com"
    },
    salary : {
        base : 75000,
        bonus : 5000,
        expenses : 50000,
        savings : 30000,

    },
    address : {
        street : "123 Main St",
        city : "Anytown",
        state : "CA",
        zip : "12345"
    }


}
console.log(employee); // Output: { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT', salary: { base: 75000, bonus: 5000, expenses: 50000, savings: 30000 }, contact: { email: '
console.log(employee.name); // Output: John Doe
console.log(employee.salary.savings); // Output: 30000
console.log(employee.contact.email); // Output:jo
console.log(employee.address.city); // Output: Anytown

employee.age = 30; // Adding a new property to the employee object
console.log(employee.age); // Output: 30
delete employee.position; // Deleting a property from the employee object
console.log(employee.position); // Output: undefined
employee.salary.bonus = 6000; // Modifying an existing property of the employee object
console.log(employee.salary.bonus); // Output: 6000 
console.log(employee); // Output: { id: 1, name: 'John Doe', department: 'IT', salary: { base: 75000, bonus: 6000, expenses: 50000, savings: 30000 }, contact: { email: '
// only keys of the employee object
console.log(Object.keys(employee)); // Output: [ 'id', 'name', 'department', 'salary', 'contact', 'address', 'age' ]
// only values of the employee object
console.log(Object.values(employee)); // Output: [ 1, 'John Doe', 'IT', { base: 75000, bonus: 6000, expenses: 50000, savings: 30000 }, { email: '
console.log(Object.keys(employee.salary)); // Output: [ 'base', 'bonus', 'expenses', 'savings' ]
console.log(Object.values(employee.salary)); // Output: [ 75000, 6000, 50000, 30000 ]
console.log(Object.keys(employee.address)); // Output: [ 'street', 'city', 'state', 'zip' ]
console.log(Object.values(employee.address)); // Output: [ '123 Main St', 'Anytown', 'CA', '12345' ]
//CHANGING TO ARRAY OF KEY VALUE PAIRS
console.log(Object.entries(employee));//      

// call,bind and apply with objects
function greet() {
    return `Hello, my name is ${this.name} and I am a ${this.position}`;
}
const person = {
    name : "Alice",
    position : "Designer"
}
console.log(greet.call(person));// Output: Hello, my name is Alice and I am a Designer
console.log(greet.apply(person));// Output: Hello, my name is Alice and I am a Designer
const boundGreet = greet.bind(person);
console.log(boundGreet()); // Output: Hello, my name is Alice and I am a Designer











let obj = {
    a : 1,
    b : 2,
    sum(){
        return this.a + this.b
    }
    
}
const result = obj.sum.bind(obj); // Output: 3
console.log(result()); // Output: 3


// same in function
function calculator(a,b){
    return{
        sum : function(){
            return a + b;
        }
    }
}
const calc  = calculator(1,2);
console.log(calc.sum()); // Output: 3
// in another way
function calculator(a,b){
    return{
        sum : () => a + b
    }
}   
const calc2  = calculator(1,2);
console.log(calc2.sum()); // Output: 3

// mupliple ojects in array
const products = [
    {   name : "Laptop",
        price : 999.99,
        brand : "TechBrand"    
    },
    {
        name : "Smartphone",
        price : 499.99,
        brand : "PhoneBrand"
    },
    {
        name : "Headphones",
        price : 199.99,
        brand : "AudioBrand"    
    }   
]
console.log(products); // Output: [ { name: 'Laptop', price: 999.99, brand: 'TechBrand' }, { name: 'Smartphone', price: 499.99, brand: 'PhoneBrand' }, { name: 'Headphones', price: 199.99, brand: 'AudioBrand' } ]
console.log(products[0]); // Output: Laptop
console.log(products[1].price); // Output: 499.99
console.log(products[2].brand); // Output: AudioBrand

// looping through the array of products
for(let index in products){
    console.log(index, products[index]); // Output: 0 Laptop, 1 Smartphone, 2 Headphones
}
products.forEach(product => {
    console.log(`Product: ${product.name}, Price: ${product.price}, Brand: ${product.brand}`);
});
// in an of loop difference between in and of loop in comments
// in loop is used to loop through the keys of an object or the index of an array, while of loop is used to loop through the values of an iterable object like an array or a string. In an in loop, we get the index or key of the current element, while in an of loop, we get the value of the current element.
// for(let product of products){
//     console.log(`Product: ${product.name}, Price: ${product.price}, Brand: ${product.brand}`);
// }    
// Output: Product: Laptop, Price: 999.99, Brand: TechBrand
// Product: Smartphone, Price: 499.99, Brand: PhoneBrand
// Product: Headphones, Price: 199.99, Brand: AudioBrand
// in loop is used to loop through the keys of an object or the index of an array, while of loop is used to loop through the values of an iterable object like an array or a string. In an in loop, we get the index or key of the current element, while in an of loop, we get the value of the current element.
// for(let index in products){
//     console.log(index, products[index]); // Output: 0 Laptop, 1 Smartphone, 2 Headphones
// }
// for(let product of products){
//     console.log(`Product: ${product.name}, Price: ${product.price}, Brand: ${product.brand}`);
// }// Output: Product: Laptop, Price: 999.99, Brand: TechBrand

// string operations with objects
