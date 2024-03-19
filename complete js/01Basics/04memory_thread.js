//memory reservation and free as per 
//memory allocation 
// stack memory and heap memory 

//stack => primitive data type 
// here maintain a copy of stack 


// heap =>non- Primitive data type
// here maintain the original reference  
/*
    object mai reference milta hai or 
    yadi copy krke dushre object se update krte hai to 
    actual mai bhi update ho jata hai .
*/
let objOne = {
 name :"pankaj ",
 email :"dewanganpankaj246@gmail.com"
}
let objTwo = objOne ;// make a copy of obj

objTwo.email = "dew@google.com";
// obj Two is update the actual Obj 
console.log(objOne.email) ;
console.log(objTwo.email)  ;