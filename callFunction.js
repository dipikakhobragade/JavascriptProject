
let person ={
    name: 'Dipika',
    age:54

}
function sayHello(company,role){
    console.log(`${person.name} ${person.age} ${company} ${role}`);

}
sayHello.call(person,'Apple','CEO');

//apply ()
sayHello.apply(person,['Apple','CEO'])

//bind()

console.log("bind()");

let funRef = sayHello.bind(person);

funRef("Apple" , "CEO" );
