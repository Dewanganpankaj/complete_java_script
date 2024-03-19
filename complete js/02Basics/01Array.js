const MyArr = [0,1,2,3,4,5] ;//basic structure
const arr4= ["pankaj" , "dewangan"] ;//another technique
const arr1 = new Array(1,2,3,4,5);// using new key words
// console.log(MyArr[2]);

//array methods

 // Basic operations in it .

    MyArr.push(6) ;
    MyArr.pop() ;
    console.log(MyArr);


// Insert in the first or starting 

    MyArr.unshift(0);
    console.log(MyArr);

// shift is also there No parameter is required
// remove from starting 
    MyArr.shift();
    console.log(MyArr);


// value of an array that gives the answer in true and false 
    console.log(MyArr.includes(3));


//try to convert array element in to the string formate value 
    const arr3 = MyArr.join() ;
//using join we convert integer to string formate 
    console.log(arr3) ;
    console.log(typeof arr3);// type is string



// slice and splice the value 

console.log("A" , MyArr) ;
const myn1 = MyArr.slice(1,3);
// Slice not manipulate the original array 

console.log(myn1) ;
console.log("B" , MyArr);

//splice manipulate the original array
const myn2 = MyArr.splice(1,3);
console.log("C" , MyArr) ;
console.log(myn2) ;


const mcu = ["thor","ironman", "spiderman"];
const dc = ["superman" , "flash" ,"batman"] ;

// here i am push array in the array.
// push method 01 

    // mcu.push(dc);
// console.log(mcu) ;
// console.log(mcu[3][1]) ;

// concate method -2 
    mcu.concat(dc);
    console.log(mcu);

// display all hero in a single  array 
    const cinema1 = mcu.concat(dc);
    console.log(cinema1);


//concate using spread operator  ...(three dot)

const cinema = [...mcu,...dc];
console.log(cinema);

 
//  move further the next logic 
const arr =[1,2,3,[4,5,6],7,[6,7,[4,5]]];

// flat cpommand is use to flat the all array
const arr2 = arr.flat(Infinity);
console.log(arr2);

//to check the array is present or not
console.log(Array.isArray(arr2));

// to form an array 
const temp = Array.from("pankaj");
console.log(temp);

//interesting case to solve the array in js 
console.log(Array.from({name:"pankaj"}))
//it gives the empty array not convert at all