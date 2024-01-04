const array =['Anil','Siya','Sunil','Jenny'];

for (const index in array) {
    if (index%2==0) {
        console.log(`${array[index]}`);
        
    }
   
}

//join()

let names = array.join(',');
console.log(names);

//concat()

var arrayBoys =['Anil','Kapil','Rahul','Bhushan'];
var arrayGirls = ['Dipika','Ridvika'];
var concatArray =arrayBoys.concat(arrayGirls);
console.log(concatArray);

//resize Array

arrayBoys.length = 3;
console.log(arrayBoys);



