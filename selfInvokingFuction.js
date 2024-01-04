

//self invoking function or IIFE

(function add(){
    console.log(`addition is ${100+200}`);
})();

(function (){
    console.log(300-100);
})();