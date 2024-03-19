
//single ton object is declared
const tinder = new Object()
console.log(tinder);

// Without Singleton object creation
const tinderuser = {
    // here we write the all values
}
tinderuser.id = "123";
tinderuser.name = "pankaj ";
tinderuser.IsLoggedIn = false ;




console.log(tinderuser);

// object inside the object 
// nested Object creation
const user ={
    email :"soma@gmail.com",
    fullName:{
        userFullName :{
            FirstName : "pankaj",
            LastName :" dewangan" 
        }

    }
}

console.log(user.fullName);

const obj1 ={
    1 :"a",
    2:"b"
}
const obj2 ={
    3 :"c",
    4:"d"
}
// to merge the two object 
// make two different object 
const val = {obj1 , obj2};
console.log(val);

// another way to merge both the object
// in a single object
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);


// spread technique
// used to disclose all the things 

const obj4 = {...obj1,...obj2};
console.log(obj4);


// object inside the array 
const array =[
    {
        name:"pankaj",
        age :23
    },{
        name :"ravi",
        age :29
    },{}
]
console.log(array[1]);

// console.log(tinderuser);

// find the all keys using some command 
// Object.keys
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
// check the existence of the keys
console.log(Object.hasOwnProperty('name'));