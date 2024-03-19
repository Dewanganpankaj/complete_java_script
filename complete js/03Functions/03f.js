

// Immediately Invoked Function Expressions(IIFE) 

// why IIFE :- to save from the global scope pollution
// we use IIFE. //syntax => ()();
(function chai()
{
    console.log('DB Connected');

})(); //immediately invoked function

// passing function with arrow name 
((name)=>{
 console.log(`hello ji mai hu ${name}`);
})('pankaj')


// interview based program

// 1 ) Java Script Execution context 
/*  
  phase one =>global execution phase
  phase two =>memory creation phase/creation phase
  Phase three => Execution phase 

  1)when the code is run 1st goes to global 
  executional phase where we allocate this method
  2)after that all thing passes to Memory Creation Phase
   here all variable assign as a undefined value 
   if any function call is there than
   (+++) new variable environment + execution phase create 
   and all things again happening like two phase of solving
   3)all command is run and return the value in it 
 */

//    Call stack 
/*  */