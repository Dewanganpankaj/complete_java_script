// // add event listner and even handler
// // id ke liye sharp (#)use krte haina 
// const key = document.querySelector('form')
// //form submit 2 type se hota  hai get or post request
// // to overcomae this issue 
// key.addEventListener('submit',function(e)
// {
//     //to stay the default operation
//     e.preventDefault()
//     //taken the values
//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const result = document.querySelector('.btn')
//     // isNaN return ture or false value
//     if( height === '' || height < 0 || isNaN(height))
//     {
//         result.innerHTML = `Please give the valid height ${height}`
//     }else if( weight === '' || weight < 0 || isNaN(weight))
//     {
//         result.innerHTML = `Please give the valid height ${weight}`
//     }
//     else{
//        const bmi = ((weight /(weight *height)/10000)).toFixed(2)
//        //show the result
//        result.innerHTML=`<span> ${bmi} </span>`
//     }
    
// })
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)/100;
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (isNaN(height) || height === '' || height <= 0) {
        result.innerHTML = `Please provide a valid height: ${height}`;
    } else if (isNaN(weight) || weight === '' || weight <= 0) {
        result.innerHTML = `Please provide a valid weight: ${weight}`;
    } else {
        const bmi = (weight / (height * height )/10000).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }
});

