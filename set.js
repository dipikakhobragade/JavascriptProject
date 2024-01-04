let rollNo = new Set();

rollNo.add(10);
rollNo.add(20);
rollNo.add(30);
rollNo.add(40);
rollNo.add(10);
rollNo.add(45);
rollNo.add(67);
console.log(rollNo);
console.log(rollNo.size);
rollNo.delete(40);
console.log(rollNo);

let isAvailable = rollNo.has(20);
console.log(isAvailable);

for (const iterator of rollNo) {

    console.log(iterator);
    
}

