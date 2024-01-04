for (let index = 0; index <=10; index++) {
    console.log(index);
    
}

for (let index = 5; index <=50; index= index+5) {
    console.log(index);
    
    
}

for (let index = 100; index >=80; index--) {
console.log(index);
    
}

for (let index = 190; index >=19; index=index-19) {
    console.log(index);
    
}

for (let index = 8; index <=80; index=index+8) {
    console.log(index);
    
}


//WAP to  the string 'javascript'

var str = 'Javascript';
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index)
    console.log(char);
    
}

//wAp to reverse string
var str = 'Javascript';
var reverseStr ='';
for (let index = str.length; index >=0; index--) {
    var char = str.charAt(index);
    reverseStr = reverseStr.concat(char)   
    
}
console.log(reverseStr);

//by using function
function reverseWord(word) {
    var reverseStr ='';
    //var wordLength = word.length-1
for (let index = word.length; index >=0; index--) {
    var char = word.charAt(index);
    reverseStr = reverseStr.concat(char)   
    
}
console.log(reverseStr);

}
reverseWord('Hello world');
reverseWord('Developer');
reverseWord('Google chrome');


var string ='hello how are you doing'
var reverseStr ='';
for (let index = string.length; index >=0; index--) {
    var char = string.charAt(index);
    reverseStr = reverseStr.concat(char)   
    
}
console.log(reverseStr);

//a e i o u
var word = 'Javascript Language of internet';
var count = 0;
for (let index = 0; index < word.length; index++) {
   var char= word.charAt(index);
   if (char=='a' || char=='e'|| char=='i'||char=='o'||char=='u') {
    console.log(char);
    count++;
    
   }
    
}
console.log(count);


console.log(1+ -'1' +'2');
console.log('A'-'B'+'2');
console.log('A'-'B'+ 2);
  




