var greet = "Good Morning";
var length1 = greet.length;
console.log('total no of char',length1);
console.log('total char',greet.length);

var charGreet=greet.charAt(0);
console.log('chatAt greet',charGreet);
var lastChar =greet.charAt(greet.length-1);
console.log('chat last',lastChar);

var firstName ='dipika';
var lastName ='khobragade';
var concatString = firstName.concat(lastName);
console.log('concat string :', concatString);

var indexOfM = greet.indexOf('M');
console.log('index', indexOfM);

var replaceString = greet.replace('Morning','Evening');
console.log('after replace',replaceString);
console.log('------------------------------------');
var fName = '   Dipika Khobragade   ';
var fNameTrim=fName.trim();
console.log('fname',fName.length);
console.log('fName',fNameTrim);
console.log('fname',fNameTrim.length);
console.log('total space',fName.length-fNameTrim.length);
console.log('trime start', fName.trimStart());

console.log('-------to check string available or not----');

var firstName= 'I am dipika';
var includeFname = firstName.includes('am');
console.log('include or not:',includeFname);

var search = firstName.search('dipika')
console.log('search name',search);
var sliceResult = firstName.slice(3,15);
console.log('slice part',sliceResult);

var greet = 'Good Morning, how are you';
var resultSplit = greet.split(' ');
console.log(resultSplit);
console.log(resultSplit.length);
console.log(greet.split(''));
