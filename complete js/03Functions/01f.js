// basic functionality of the of function

function func(number1 ,number2)
{
   const sum =  number1+number2;
   return sum ;
}
const sum = func("4",2) ;
console.log("result is ",sum);

//  when nothing is pass nothing to the  function 
// undefined is printed 
function funct(username ="eam")
{
    if(!username)
    {
        console.log(`Please enter the user name `)
    }
    else{
        return `i am ${username}`;
    }
   
}
// declare things is taken other wise update the passes value 
const logo = funct();
console.log(logo);


// when we  dont know many argu. comes
// used the rest operator or spread operator (...num)
function calculatesum(...num)
{
    return num;
}
console.log(calculatesum(2,2,3,4,5));


// how we pass object inside the function
const user ={
    username :"pankaj",
    age :27,
    price :200
} 
function handle(user)
{
    console.log(`user name is ${user.username}
     and price is  ${user.price}`)
}
handle(user);


// try to pass the array in function
const arr=[20,23,394,90];
function funct(obj)
{
    console.log(`${obj[2]}`);
}
funct(arr);