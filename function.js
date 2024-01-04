
function swapVariable(num1,num2) {
    
var temp = num1;
num1=num2;
num2= temp;
console.log(num1,num2);
    
}
swapVariable(100,200);


function swapName(name1, name2){

var temp =name1;
name1=name2;
name2=temp;
console.log(name1,name2);
}

swapName('dipika','khobragade');


function addition(a,b,c) {
    console.log(a+b+c);
    var result = a+b+c;
    console.log(result);
    
}
addition('good','hello','morning');
addition(10,20,30)

//function with return value

function addition(num1,num2) {
    var result = num1+num2;
    return result;
    
}

var returnResult = addition(500,300);
console.log(returnResult);
