var amarSSC = 57;
var amarHSC = 89;
var result = amarSSC>=55 && amarHSC>=60 ?'congratulation' :'sorry try next time';
console.log(result);

var rahulAge = 17;
var result = rahulAge>=18 ? 'allow for vote':'you are not allow';
console.log(`${result}`);

var candidateName = 'Dipika';
var age = 23;
var gender = 'female';
var result = (gender=='female'&&age>=18)|| (gender=='male'&& age>=21) ?'you r elegible' : 'not eligible';

console.log(result);


var num1 =13;
var result = num1%2 == 0? 'even no':'odd no';
console.log(result);

var greaterNum = function(num1, num2){

    var result = num1>=num2 ? `${num1} is greater no`: 'num1 is smaller no';
    console.log(result);
}
greaterNum(3,6);

var isEvenOdd = function(word){
   var length = word.length;
   var result = length % 2==0 ? 'Even' :'Odd';
   return result;

}
var returnResult = isEvenOdd('javascript');
console.log(returnResult);





