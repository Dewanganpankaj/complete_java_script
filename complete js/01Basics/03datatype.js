console.log("1"+2) ;
console.log(1+"2");

// when two number is used simply 
// add those number

console.log("1"+2+2) ;
// behave as a string 
console.log(2+2+"1") ;
// behave as a number 

// unexpected result 
console.log(null > 0 );
console.log(null == 0) ;
console.log(null >= 0) ;

// premitive data type 

// 7 types : 
//string , Number , boolean , null , undefined
// symbol , BigINT 

// symbol ki return value same nhi hoti hai 
const id = Symbol('123') ;
const id2 = Symbol('123') ;
console.log( id === id2);



// non primitive data type(reference)
// directly allocated to memory  

// Array, Object, function 

const heros = ["shaktiman" , "nagraj","doga"];

//object data type is always object 
let myobj = {
    name : "pankaj" ,
    age : 22 ,

}
// function datatype is always function
const myFucntion = function (){
    console.log("hello world") ;
}
console.log(typeof myFucntion )

// let ,var,const :=>data type

// var is totally global once you declare than use multiple time 