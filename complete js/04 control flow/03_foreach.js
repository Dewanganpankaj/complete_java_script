/*
const coding = ["array" , "js","ruby","python","jss"]

// for each not return automatically
const value = coding.forEach((item)=>{
   // console.log(item)
    return item; 
}

)
console.log(value)

// filter also taken callback function inside the value 
const mynums =[1,2,3,4,5,6,7,8,9,10];
// filter mai callback function ke saath 
// condition diya jata hai jo value return krti hai  
        let newnums = mynums.filter((num)=> { return num > 4})
        console.log(newnums)

// using for each element 
        const nums = []
        mynums.forEach((num)=>{
            if(num > 4)
            {
                nums.push(num);
            }
        })
        console.log(nums)



// Map function is same as filter function
// normally when we are not using the {}this
    const nums = [1,2,3,4,5,6,7,8,9,10];
    const val = nums.map((mp)=>mp +10);
    console.log(val);

// when using the {}
// return key word is used to identify the value  
    const nums1 = [1,2,3,4,5,6,7,8,9,10];
    const val = nums1.map((mp)=>{return mp +10});
    console.log(val);


// channing the value 
const nums2 = [1,2,3,4,5,6,7,8,9,10];
const newNums = nums2.map((mp)=>{return mp*10}).
            map((mp)=>{return mp+1}).filter((num)=> (/*condition//)num >15 );
console.log(newNums)


// concept of reducing the value 

    const mynums = [1,2,3];
    const total  = mynums.reduce((acc,curval)=>acc + curval,0)
    console.log(total)

*/

// reduce concept in th object 
const obj = [
            {
                itemname : "js course",
                price : 2999
            },
            {
                itemname : "java course",
                price : 999
            },
            {
                itemname : "mobile course",
                price : 5999
            }]
// object ke value ko add krna hai to ky kare
const v = obj.reduce((acc,item)=>acc + item.price ,0)
console.log(v);