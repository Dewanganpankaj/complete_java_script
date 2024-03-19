
function one(){
    const username ="pankaj"
    function two()
    {
        const website  = "youtube"
        console.log(username);
    }
    
    // console.log(website);
    two();
}
one();

// +++++++++++++interesting++++++++++++//
/* hoisting:- built-in behavior of the language 
through which declarations of functions, variables,
and classes are moved to the top of their scope –
all before code execution. In turn, this allows 
us to use functions, variables, and classes before
they are declared */

console.log(addone(5));
function addone(num)
{
    return num+1;
}


//this type of declaration we not use function
// declaration before call
// addTwo(5); 
const addTwo = function(num)
{
    return num+2;
}
addTwo(5); 


// arrow function in the js 
// this keyword used for current context
const user={
    username :"pankaj",
    price :999,
    // this is used for current context
    welcome : function()
    {
        console.log(`${this.username}, wecome to my page`)
        console.log(this)
    }
}
// this.user name working inside the object 



// this key word is used for current context 
// always takes teh update value in it 
// inside browser mai object => window 
user.welcome()
user.username = "hero";
user.welcome()


// arrow function 
const chai = (num1,num2) =>{
    return num1+num2
}
console.log(chai(3,4));

// implicit return 
const peena = (num1,num2) => num1+num2

console.log(peena(3,4));

