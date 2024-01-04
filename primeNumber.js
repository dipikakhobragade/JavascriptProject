function primeNumber(num){

let isPrime=true;
for (let index = 2; index < num; index++) {
if (num%index==0) {//11%2 1==0 11%3

    isPrime=false;
    console.log('not a prime no as it is divisible by index');
    break;
}
    
}
if (isPrime) {
    
    console.log('num is prime number');
}else{
      
    console.log('num is not prime no');
}
}
primeNumber(4);
primeNumber(11);
primeNumber(9)

function primeNum(num) {

    let isPrime = true;
  
    for (let index = 2; index < num; index++) {
  
      if (num % index == 0) {
  
        isPrime = false;
  
        console.log(`Not a prime number as it is divisible by ${index}`);
  
        break;
  
      }
  
    }
  
    if (isPrime) {
  
      console.log(`${num} is prime number`);
  
    } else {
  
      console.log(`Is not prime number ${num}`);
  
    }
  
  }
  
   
  
  primeNum(4);
  
  primeNum(5);
  
  primeNum(9);
  
  primeNum(11);


n1 =0;
n2 =1;
next =n1+n2;
n2 = next;
n1=n2;
