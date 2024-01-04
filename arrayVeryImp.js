


let array =[1,2,3,4,5,8,8,9,5,6,7,];
console.log(typeof array);

console.log(array.length);

// access index value
let indexValue = array[0];
console.log(indexValue);

//access last element
let lastIndex = array.length;
let lastElement = array[lastIndex-1];
console.log(lastElement);

//add last position element
array.push(80);
console.log(array);    

//add element in 1st position
array.unshift(70);
console.log(array);

//remove last
array.pop();
console.log(array);

//remove 1st
array.shift();
console.log(array);

// update array element
array[2] = 88;
console.log(array);

array[array.length-1] = 77;
console.log(array);

let str = 'the kerala story is good movie';
let split = str.split(' ');
console.log(split);

//access perticular portion
let slice = array.slice(3);
console.log(slice);

let slice1 = array.slice(2,5);
console.log(slice1);

//remove the element
let splice = array.splice(3);
console.log(splice);

let array1 = [34,56,7,8,9,34,5,6,73]
let splice1 = array1.splice(3,5);
console.log(splice1);

//splice for insertion without replacing any element
let array2 = [34,56,7,8,9,34,5,6,73];
array2.splice(2,0,99,78);
console.log(array2);

//splice for replacing element
let array3 = [34,56,7,8,9,34,5,6,73];
array3.splice(1,1,33,22,90);
console.log(array3);
array3.splice(2,2,111,100,104);
console.log(array3);




let nameArray = ['Anil','Siya','Sunil','Jenny'];
// nameArray.shift();
// console.log(nameArray);
nameArray.splice(2,0,'Ram');
console.log(nameArray);

var nameArray1 = nameArray.slice(nameArray.length-2);
console.log(nameArray1);
//0 for no element remove, //2 for remove two element
nameArray.splice(1,0,'Bill','Stew');
console.log(nameArray);

//Array traversing

var arrayName = ['Anil','Siya','Sunil','Jenny'];
for (let index = 0; index < arrayName.length; index++) {
    const element = arrayName[index];
    console.log(element);
    
}

// for In loop key means element

for (const element in arrayName) {

    console.log(element);
    
}

for (const element of arrayName) {
    console.log(element);
}





