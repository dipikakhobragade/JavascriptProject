//Imp questions

let n1 = 100;
function outerFun(){
    let n2 = 200;
    let innerFun = function(){
        let n3 = 300;
        console.log(`Global variable n1 ${n1}`);
         console.log(`Outer fun variable n2 ${n2}`);
         console.log(`Inner Fun variable n3 ${n3}`);


    }
    return innerFun;
}
outerFun()();
// let inner = outerFun();
// inner();
//console.log(inner);


let str = 'Developer';
let res = str.charAt(0).toLowerCase();
console.log(res);
