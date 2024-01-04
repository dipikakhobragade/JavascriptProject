var str = 'Good Morning';
var reverse ="";
var wordLength = str.length-1;
for (let index = wordLength; index >=0; index--) {
    
     var char = str.charAt(index);
     reverse = reverse.concat(char);
     
    
}
console.log(reverse);



