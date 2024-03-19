const name = "pankaj" ;
const count = 39 ;
//console.log(name + "30" +count + 30) ;
//modern time we not not use this sign 

// in modern time we use backticks
// string interpolation known as 
console.log(`hello my name is ${name} and my count is ${count}`); 


// new syntax to declare the string 
// through this we use multiple prototype in it
// key value pair excess in it 

const game = new String("pankaj");
console.log(game.__proto__);
// __proto__command we find the object in {}in console

console.log(game.toUpperCase());

// substring command we use 
console.log(game.substring(0,3));
//last index except

//slicing in the js 
console.log(game.slice(-6,2));
// -ve value reverse the string 