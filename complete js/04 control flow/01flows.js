// truthy and falsy value in js 

// falsy values
/*
    false ,0,-0 , BigInt 0n,"",null,
    undefined, NaN 
*/

// truthy values
/*
    "0" , 'false' , " ", [] , {} , 
    function(){} //empty function
*/

// object ke value ki array bnana 
/* 
    Object.keys(emptyobj).length === 0
    above statement make aan array 
 */


    // nullish coalescing operator(??)
    // null and undefined
    // yadi value aayi hai to assign other wise assing 
    // null to hai hi option field mai
    
    let val1 ;
    // val1 = 5 ?? 10 ;
    val1 = null ?? 10
    console.log(val1)

