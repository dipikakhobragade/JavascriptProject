
'use strict'
'use strict'

const array = [11, 22, 33, 44, 55, 66];

console.log(array);

console.log(...array);

 

const array2 = [...array];//deep clone

 

const person = {

    name: "Stew",

    age: 57,

    country: "US"

}

 

const person2 = {...person};
//const person2 ={...person};

console.log(person2);

//rest parameter should be last parameter
function show(adharNum, role, ...parameters) {

    console.log(adharNum, role, parameters);
  
  }
  
  show(11223344, "CEO", 23, "Elon", "US");


  function division(num1, num2=1){ // let num1 = 7, let num2;
//not pass any value that time default agrmnt value will consider
    if(num2==0){

        num2=1;

    } 

    console.log(num1/num2);

}

division(10, 5);

division(67, 0);

division(7);

//object destructuring

const student={
    name:'Dipika',
    age:56,
    country:'India',
    college:'CEOP Pune',
    marks:'98%',
    degree:'BE',
    rollNo: 334455
}
// const rollNo = student.rollNo;
// const college = student.college;
// const degree =student.degree;
const{rollNo,college,degree,name,age}=student;
const{pin,country,marks,isMarried=false}=student;//const pin = student.pin; //OD with default Value

const arr =[22,44,77];
const[element1,element2,num1,num2=90]=arr;
console.log(element1,element2,num1,num2);
