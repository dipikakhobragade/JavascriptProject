let map = new Map();
//key and values
map.set(11,'Dipika')
map.set(22,'Ridvika')
map.set(33,'Kavita')
map.set(44,'Radha')
map.set(55,'Madhu')
map.set(66,'Riddu')
console.table(map);
let size = map.size;
console.log(size);

//Retrieve the value using key
let valueOfKey = map.get(22);
console.log(valueOfKey);
console.log(map.get(77));

//adding duplicate keys value will be overwrite
map.set(33,'Bill');
//adding duplicate value
map.set(77,'Riddu')
//delete entry
map.delete(44);
console.table(map)

//is available or not
let isAvailable=map.has(11);
console.log(isAvailable);

let keys = map.keys()
console.log(keys);

let value = map.values()
console.log(value);

//for of loops---traversing
let keyOfMap = map.keys()
for (const key of keyOfMap) {
    let value1 = map.get(key);
    console.log(`${key} ${value1}`);
    
}
