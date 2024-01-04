


const bill = document.querySelector('#bill');
const discount = document.querySelector('#discount');
const calculator = document.querySelector('#calculator');
const total = document.querySelector('#total');

calculator.addEventListener('click',()=>{
    //validation

    const billValue = bill.value;
    const discountValue = discount.value;
    console.log(billValue);
    console.log(discountValue);
    isValid(discountValue);

    //const discountAmount = (billValue/100)*discountValue;
    const discountAmount = billValue-(billValue*discountValue)/100;
    console.log(discountAmount);
    total.innerHTML=`Total Amount to Pay is: ${discountAmount}`


});
function isValid(discount) {
    if (discount<0 || discount>100) {
        return false;
    }
    return true;
    
}