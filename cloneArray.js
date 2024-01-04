
const array =[11,22,33,44,55];
// const arrayClone = array; // shallow clone

// arrayClone.splice(2,0,77,99);
// console.log(arrayClone);
// console.log(array);

const cloneArray=[...array];

cloneArray.splice(2,0,77,99);
 console.log(cloneArray);
 console.log(array);


 const arrayNum =[20,3,4,56,90,400,49];
 const cloneArrayNum =arrayNum; //shallow clone
 cloneArrayNum.push(55,66);
 console.log(arrayNum);
 console.log(cloneArrayNum);


 const array1=[1,2,3,4,5,7];
 const array2 =[33,4,47,77,8,9];
 const array3 =array1.concat(array2);//for concat
 console.log(array3);

 const array4=[...array1,...array2];
 console.log(array4);// for concat 


