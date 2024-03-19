
const score = 400.092394 ;
console.log(score) 
const balance = new Number(100) ;
console.log(balance) ;
console.log(balance.toString().length) ;

//use  property to fixed 
// maximum use in Ecommerce 
console.log(score.toFixed(2)) ;

// to precision property
//return an string dependency
console.log(score.toPrecision(5)) ;

 // toLocal string values how we use of them 
 const hundered = 1000000;
 console.log(hundered.toLocaleString('en-IN'));



//+++++++++++MATHS+++++++++++++//
//console.log(Math);
//bvalue always between 0 and 1 ;
console.log((Math.random() *10) +1);

// we find the value from min ans max ranges 
const min = 10 ;
const max = 20 ;
// i need to generate number between 10 and 20 
console.log(Math.floor(Math.random() * (max-min+1))+min);


// +++++++++++++++dates()+++++++++++++++++++++++
//date from 1 jan 1970 
// new use krne se object bn rhi hai 
// without new keyword behave like a string 

let mydate = new Date();
console.log(mydate);
console.log(typeof mydate);

let timestamp = Date.now() ;
console.log(timestamp);

console.log(Math.floor(Date.now()/1000));

//toLocalString is used 

new Date().toLocaleString('default', {
    weekday: 'long',
    // define other properties here
});
