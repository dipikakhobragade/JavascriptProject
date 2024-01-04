
const arrayNum=[10,5,70,90,100,30,47];

arrayNum.forEach((element)=>{
    if (element>0) {
        console.log('positive no',element);
    }

})

arrayNum.forEach((element,index)=>{
    console.log(`${element},${index}`);
})

const arrNegativeNum =[];
arrayNum.forEach((element)=>{
if (element<0) {
    arrNegativeNum.push(element)

}
});
arrNegativeNum.forEach(element=>console.log(element));



const array =['Dipika','Ridvika','Addu','Yash','Kavi'];

//length of the word and square it and then sum it all
//currentValue mens element
let result = 0;
array.forEach((element)=>{
    const wordLength =element.length;
     result = result + wordLength*wordLength;


});
console.log(result);



class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){

        this.emp_id = emp_id;

        this.emp_name = emp_name;

        this.emp_dept = emp_dept;

        this.emp_salary = emp_salary;

        this.emp_company = emp_company;

    }

}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");

const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");

const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");

const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");

const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

 

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

 

// WAP to find the employees from Finance department

array_employees.forEach( (employee)=> {

    if (employee.emp_dept=="Finance") {

        console.log(employee);

    }

});

//WAP to get the sum of all salary
let sum_salary_infy =0;
array_employees.forEach((employee)=>{
    if (employee.emp_company=='Infy') {
        sum_salary_infy=sum_salary_infy+employee.emp_salary;

    }
});
console.log(`sum of salary of info employee${sum_salary_infy}`);

// WAP to find the average salary of an employee 

let sumSalary = 0;

array_employees.forEach( (employee) => {

    sumSalary = sumSalary + employee.emp_salary;

});

let averageSalary = sumSalary / array_employees.length;

console.log(`Average Salary is : ${averageSalary}`);


//wap to find avg salary

let sum_emp_salary =0;
array_employees.forEach((employee=>{
    sum_emp_salary = sum_emp_salary + employee.emp_salary;
    
}));
let avg_salary = sum_emp_salary/array_employees.length;
    console.log(avg_salary);

//wap to get avg salary of it dept
let arrayIT =[];
array_employees.forEach((employee)=>{
    if (employee.emp_dept=='IT') {

        arrayIT.push(employee);
        
    }
});
let sum_salary =0;
arrayIT.forEach((employee)=>{
    sum_salary = sum_salary+employee.emp_salary;
});
let av_sal = sum_salary/arrayIT.length;
console.log(`avg sal of it ${av_sal}`);