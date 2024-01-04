let factorial =1; //20
for (let index = 5; index >= 1; index--) { //index == 5 4 3 2 1
  
    factorial = factorial*index // 5*1 = 5 //4*5
}

console.log(factorial);

let fact = 1;
for (let index = 7; index >=1; index--) {
   
    fact = fact*index;
    
}
console.log(fact);

function factorialNum(num) {
    if (num == 0)
    {
        console.log(`fact is zero `);
      
    }
    if (num===undefined) {
        console.log(`value is undefine`);
      
    }
    if(num===null)
    {
        console.log(`value is null`);
      
    }

    let fac = 1
    for (let index = num; index >=1; index--) {
       

        fac = fac*index;

        
    }
  return fac;
    
}
let result = factorialNum(3);//3*2*1
console.log(result);
// factorialNum(6);
// factorialNum(10);
factorialNum(0);
factorialNum(undefined);
factorialNum(null);
