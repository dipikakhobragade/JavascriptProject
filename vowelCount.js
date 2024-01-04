var str = 'Javascript Language';
var count =0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char =='a'|| char =='e'||char=='i'|| char=='o'||char=='u'||
    char =='A'|| char =='E'||char=='I'|| char=='O'||char=='U') {
        console.log(char);
        count++;
        
    }
    
}
console.log(count);


function oddPositionChar(str1){
var string = '';
for (let index = 0; index < str1.length; index++) {
    var char = str1.charAt(index);

    if (index%2!=0 && char!=' ' ) {
        string = string.concat(char);
        
    }                          
    
}
console.log(`${string}`);
}
oddPositionChar('Hard Work always pays back');


var sumOfCube = function(num){
    var sum =0;

    for (let index = 1; index <=num; index++) {
        sum = sum + index*index*index;
        
        
    }
    console.log(`sum cube result ${sum}`);

}

sumOfCube(5);
sumOfCube(8);