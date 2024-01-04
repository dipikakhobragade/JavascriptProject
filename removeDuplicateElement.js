const arrayNum=[11,3,4,11,4,7,3];
const setNum = new Set();
for (const element of arrayNum) {
    
    setNum.add(element)
}
console.log(setNum);


//or

const arrayNum1=[11,3,4,11,4,7,3];
const setNum1 = new Set(arrayNum1);
console.log(setNum1);

//or
const arrayNum2=[11,3,4,11,4,7,3];
const setNum2 = [...new Set(arrayNum2)];
console.log(setNum2);

//without using set or spread operator
for (let i = 0; i < arrayNum1.length; i++) {
    const element = arrayNum1[i];//11
    for (let j = 0; j < array.length; j++) {
        if (i==j) {
            continue;
            
        }
        if (element==arrayNum1[j]) {

            
        }
        
    }
    
}




                