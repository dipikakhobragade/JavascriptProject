

let person = {
    height: '6feet',
    name: 'Dipika Khobragade',
    city :'Mumbai',
    age: 36,
    isMarried: true
}

let keys = Object.keys(person);
for (const element of keys) {
    console.log(element);
    
}
console.log(keys);

let value = Object.values(person);
console.log(value);
//for entries
let entries = Object.entries(person);
console.table(entries);
const entry=entries[2];
//const entry = entries[1][1];
console.log(entry);
console.log(entry[0]);
console.log(entry[1]);

//traversing an object

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const values = person[key];
        console.log(`${key}, ${values}`);
        
    }
}
