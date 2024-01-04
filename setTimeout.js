
'use strict'

//normal function
//function(){} we can
let display = function(){
    console.log('display');
}
//1 sec = 1000 milli sec
setTimeout(display,9000);

// for annonymous function
setTimeout(function(){
    console.log(100+100);

},5000);

//arrow function
setTimeout(()=>{
    console.log('inside arrow function');

},3000)