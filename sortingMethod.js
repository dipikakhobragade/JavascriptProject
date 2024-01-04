
const arrayNames = ['Shyam','Anil','Shubhu','Bittu','Kittu'];
arrayNames.sort();//sorting in asending order
console.log(arrayNames);
arrayNames.reverse();
console.log(arrayNames); //reverse array that is in ascending order

const array =[23,9,204,4,0,66,106];
array.sort((n1,n2)=>{
    return n1>n2? 1:-1;
});
console.log(array);
array.reverse();
console.log(array);