// destructure the object and its value on it 

const course={
    couresname :"js in hindi",
    price:999,
    teacher:"prince"

}
// console.log(course.price);

// when you need multiple access
 
// {} => Destructure and replace with short name
const {teacher:ts} = course ;
console.log(ts)
