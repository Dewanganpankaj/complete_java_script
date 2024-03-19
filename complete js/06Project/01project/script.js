const buttons  = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector("body");
// add eventLister who listen teh event 
buttons.forEach((function(button)
{
    // console.log(button)
    //listening the event 
    button.addEventListener("click",(e)=>
    {
       // console.log(e);
       // console.log(e.target)
       if(e.target.id === "blue1")
       {
         body.style.backgroundColor = "skyblue"
       }
       else if(e.target.id === "red1"){
          body.style.backgroundColor = "red"
       }
       else if(e.target.id === "yellow1"){
        body.style.backgroundColor = "yellow"
        }
        else{
        body.style.backgroundColor = "pink"
        }
    })
}))
