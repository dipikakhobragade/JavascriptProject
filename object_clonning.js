let person = {
  height: "6feet",

  name: "Bill gates",

  city: "Pune",

  age: 54,

  isMarried: true
};

let student ={

}

person = student;
student=person; // shallow clonning
Object.assign(student,person);
student.age=100;
person.age =28;

console.log(person);
console.log(student);

let num1 =100;
let num2 =200;
num1=num2;

//num1=200
//num2=200

