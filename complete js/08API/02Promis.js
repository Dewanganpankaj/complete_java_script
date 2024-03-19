// <!-- promise is a things that happen in future 
//The Promise object represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting
//  value asynchoronus means at a time one
//  Promise is having an 3 stages :-
// 1) pending :=> initial state , neither fulfilled nor rejected
// 2) fulfilled => meaning that the operation was completed successfully
// 3) rejected => meaning that the operation failed 

// -->

//consume promises =>object also using new keyword and callback function

//promise cerated how ???
//teo part resolve or reject also having call back function
    // Method 1 is this 
        // const promiseOne = new Promise(function(resolve,reject)
        // {
        //     //do an async task 
        //     // DB calls , crptography , networkcall 
        //     setTimeout(function(){
        //         console.log('Async is complete');
        //         resolve()
        //     },1000)
        // })
        // // resolve is connected to then keyword 
        // promiseOne.then(function()
        // {
        //     console.log("Promise consume ");
        // })//resolve connection
    
    // method 2 is this
            // new Promise(function(resolve, reject){
            //     setTimeout(function(){
            //         console.log("Async task 2");
            //         resolve()
            //     }, 1000)
            
            // }).then(function(){
            //     console.log("Async 2 resolved");
            // })

    // method 3 to make promise 
            // const promiseThree = new Promise(function(resolve,reject)
            // {
            //     //pass data from the  network
            //     setTimeout(function()
            //     {
            //         resolve({username :"chai" , email :"dewanganpankaj246@gmail.com" })
            //     },1000)

            // })
            // //also callback here 
            // promiseThree.then(function(user)
            // {
            //     console.log(user);
            // })

// promise 4 to learn new thing
        // const promiseFour = new Promise(function(resolve,reject)
        // {
        //     setTimeout(function()
        //     {
        //         let error = true ;
        //         if(!error)
        //         {
        //             resolve({user : "pankaj" , email : "dew@google.com"})
        //         }
        //         else{
        //             // reject for this error 
        //             reject('ERROR :somthing went wrong')
        //         }
        //     },1000)
        // })
        // // jiske throught accept  kr rha hai 
        // promiseFour
        // .then((user)=>
        // {
        //     console.log(user);
        //     return user.user 
        // })
        // .then((user)=>{
        //     console.log(user)
        // })
        // .catch(function(error)
        // {
        //     console.log(error);
        // }).finally(function(){
        //     console.log("finaaly is done")
        // })
        

// fifth method to call promise 
        // const promiseFive = new Promise(function(resolve, reject){
        //     setTimeout(function(){
        //         // Set error to true to intentionally reject the promise
        //         let error = false;
        //         if (!error) {
        //             resolve({username: "javascript", password: "123"})
        //         } else {
        //             reject('ERROR: JS went wrong')
        //         }
        //     }, 1000)
        // });

        // async function consumePromiseFive(){
        //     try {
            // await function is wait for promises
        //         const response = await promiseFive
        //         console.log(response);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }

        // consumePromiseFive();

// same thing in try catch await and async function
// async and await make promises easier to write"
// async function return a Promise
// await makes a function wait for a Promise

        // async function getAlluser() {
        //     try {
        //         // jha bhi wait krna hoto await command use krna hoga
        //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //         console.log(response);
        //         const data = await response.json();
        //         console.log(data);
        //     } catch (error) {
        //         console.log("ERROR :", error);
        //     }
        // }
        // getAlluser();

// same thing using the this.catch()function 

fetch('https://jsonplaceholder.typicode.com/users').then(
    (response)=>{
        return response.json()
    }
).then((data)=>{
    console.log(data)

}).catch((error=>{
    console.log("error")
}))
