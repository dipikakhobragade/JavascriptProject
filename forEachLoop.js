


const arrayNum = [10, 5, 70, 90, 100, 30 ];

 

arrayNum.forEach( ( currentValue, index, array ) => {

    console.log(`${currentValue}, ${index}`);

    console.log(array);

}  );

 

console.log(" ======== Executing forEach() with only required arguments==========");

arrayNum.forEach( (currentValue) => {

    console.log(currentValue);

} );

