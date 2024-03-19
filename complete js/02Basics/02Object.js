//singleton object = when object made by constructor
//  example := object.create();

//Object Literals
//this is object
//Symbols are used to create object properties,
//  for example, when you want to assign a unique 
// identifier to an object. 
const mykey = Symbol();
const user={
    // here we define key and value 
    name :"pankaj",
    age : 23 ,
    // add symbol in object only through ine form
    [mykey] :"key1",
    email:"dewangnapankaj246@gmail.com",
    location :"bhilai",
    isLoggedIn :false ,
    lastLoginDays :["monday", "Saturday"],
}
// value to access this object
// one way to access the object  
console.log(user.name);

//another ways to access the object
// use as the formate of string 
console.log(user["email"]);

// use symbol to add as obj and try to print
console.log(user[mykey]);
console.log(typeof user[mykey]);

//  update the value of email and than we are trying to resolve 
user.email = "dew@google.com"
console.log(user.email);

// if we want to freeze the data 
console.log(user);
// Object.freeze(user);

// add function in object 
// this is same as normal variable in js

// we use greeting function to add this 
user.greeting = function(){
    console.log("hello user") ;
}
console.log(user.greeting());
// using above undefined is show

console.log(user.greeting);
// using above undefined is show
// [Function (anonymous)] this is show