// loops in //iterator


// for loop  =>
        for(let val=1 ;val<=2;val++)
        {
            console.log(`i am the outer loop ${val} hu`)
            for(let j = 0 ;j<5;j++)
            {
                console.log(`i am the inner loop ${j} hu or outer loop ${val}`)
            }
        }

    //while loops and do while loops 
        let array = ["hero" , "daku" , " mohan"] ;
        let i = 0 ;
        while( i < array.length)
        {
            console.log(`value of my array is ${array[i]}`);
            i++ ;
        }

    //for of loops =>
        const arr1=[1,2,3,4,5]
        for (const num of arr1) {
            console.log(`our number is ${num}`);
            
        }
    // for of loop =>string
        const  greeting = "hello world!";
        for (const it of greeting) {
            console.log(`each character of the word is ${it}`)
        }

    // maps in js => 
            const map= new Map();
            map.set('IN' , "INDIA");
            map.set('USA',"america")
            console.log(map);
            // key or value ke use kr ke unique print krna 
            // destructure by [] bracket in it
            for (const [key,value] of map) {

                console.log(key,':-' , value)
            }

    // iterate in object
    // for in Loops :=>  
            const obj={
                js :'java script',
                cpp :"c++",
                ruby : "ruby",
                swift : "swift by apple" 
            }
            for (const key in obj) {
                console.log(`${key} value${obj[key]} `);
            }


    // for in loops inside the array 
            const arr = ["c++" , "python","ruby" , "js"]
            for (const key in arr) {
                console.log(`${key} is ${arr[key]}`);
            }


// for each loop in js 
/*using call back function in js  */
const coding = ["array" , "js","ruby","python","jss"]
// call back function mai function name nhi hota hai na 
        // coding.forEach( function (item){
        //     console.log(item);
        // })
// arrow function is there 
        // coding.forEach((val)=>{
        //     console.log(`value hai ye meri ${val}`)
        // })

// function declare and update from outside the function
        function printMe(item)
        {
            console.log(item)
        }        
        coding.forEach(printMe)
        

const Mycoding =[
    {
    languageName: "jscript",
    languageFile :"js"
    },
    {
        languageName: "java",
        languageFile :"j"
    },
    {
        languageName: "python",
        languageFile :"py"
    }
]
Mycoding.forEach((item) => {
    console.log(item.languageName);
});
        
            