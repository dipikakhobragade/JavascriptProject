

console.log(`Arrow function with no arguments and no return value`);

let display = ()=> {

    console.log(`Display function...`);

}

display();

 

 

console.log(`Arrow function with arguments and no return value`);

let show = (id, name) => {

    console.log(`ID: ${id} Name: ${name}`);

    console.log(`Inside show function ...`);

}

show(22, "Bill");

 

console.log(`Arrow function with arguments and return value`);

let add = (num1, num2) => {

    let result = num1 + num2;

    return result;

}

let result = add(100, 200);

console.log(`Result is ${result}`);



let showFun =(num1,num2)=>{
    num3 = num1+num2;
    console.log(num3);

}
showFun(100,200);

let greet = ()=>{
    console.log(`Good Morning`);

}
greet();


let mul = (n1,n2,n3=1)=>{
    

}
mul(5,5,2);
mul(10,4)



class Employee{
    constructor(name,age,company,salary){
        this.name =name;
        this.age = age;
        this.company= company;
        this.salary =salary;
    }
}

const billObject =new Employee('Bill',34,'TCS',60000);
const dipikaObject =new Employee('Dipika',34,'Infy',60000)
const kavitaObject =new Employee('kavita',34,'TCS',60000)

const array =[billObject,dipikaObject,kavitaObject];

for (const employee of array) {
    if (employee.company =='TCS') {
        console.log(employee.name);
    }
    if (employee.name.startsWith('D')) {
        console.log(employee.name);
        
    }
   
    
}
