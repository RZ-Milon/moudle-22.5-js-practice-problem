// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

// Ans: 
var stringType1 = 'Milon';
var stringType2 = 'Dhaka';
var stringType3 = '1990';
console.log(typeof stringType1);
var booleanType1 = 5 < 10;
var booleanType2 = true;
console.log(typeof booleanType2);
var numbertype = 20;
console.log(typeof numbertype);

/* ------------------------------------------------------- */


// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।

// Ans:
// let diye variable likhele variable er man change kora jay r const diye variable likhle variable er man poribortan kora jay na.
let x = 28;
x = 25;
console.log(x);
const age = 28;

/* -------------------------------------------------------- */


// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, % এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

// Ans:
var num1 = 10;
var num2 = 20;
var addition = num1 + num2;
console.log(addition);
var substruction = num1 - num2;
console.log(substruction);
var multipliction = num1 * num2;
console.log(multipliction);
var division = num1 / num2;
console.log(division);
var modulusOrRemainder = num1 % num2;
console.log(modulusOrRemainder);

/* -------------------------------------------------------- */


// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

// Ans:
var num1 = 20;
var num2 = 50;

var comparison = num1 < num2;
console.log(comparison);
var comparison = num1 > num2;
console.log(comparison);
var comparison = num1 != num2;
console.log(comparison);
var comparison = num1 == num2;
console.log(comparison);
var comparison = num1 <= num2;
console.log(comparison);
var comparison = num1 >= num2;
console.log(comparison);

/* -------------------------------------------------------- */


// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

// Ans:
var programing = true;
var problemSolving = false;
if(programing === true && problemSolving === true){
    console.log('I can got a job');
}
else{
    console.log('You will not a job');
}

if (programing === true || problemSolving === false) {
    console.log('I can got a job');    
}
else{
    console.log('You will not a great job');
}

/* -------------------------------------------------------- */



// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

// Ans:
if (programing === true || problemSolving === false) {
    console.log('I can got a job');    
}
else{
    console.log('You will not a great job');
}

/* -------------------------------------------------------- */



// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

// Ans:
var number = 1;
while (number <= 19) {
    console.log(number);
    number = number + 2;
}

/* -------------------------------------------------------- */



// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

// Ans:
var array = [1, 3, 10, 30, 100, 20, 50, 23, 67];
console.log('Array element: ', array.length);
array[4] = 200;
console.log(array);
array.push(800, 1020);
console.log(array);
array.pop();
console.log(array);

/* -------------------------------------------------------- */


// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

// Ans:
var array = [1, 3, 10, 30, 100, 20, 50, 23, 67];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

/* -------------------------------------------------------- */



// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

// Ans:
var myNumbers = [100, 30, 150, 310, 80, 20, 50, 23, 90];
for(var i = 0; i < myNumbers.length; i++){
    if(myNumbers[i] <= 80){
        continue;
    }
    console.log('This number is > 80: ', myNumbers[i]);
}

/* -------------------------------------------------------- */



// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

// Ans:

function multiplication(a, b, c){
    const result = a * b * c;

    return result;
}

console.log('Multiply:', multiplication(10, 30, 50));


/* -------------------------------------------------------- */


// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

// Ans:
let student = {
    name: 'Rahim',
    id: 10034,
    class: 10
}
student ['class'] = 12;
console.log(student);



/*////////////////////////////////////////////////////////////////////////
/// প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 
///////////////////////////////////////////////////////////////////////*/


// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

// Ans:
function feetToInch(feet){
    const inch = feet * 12;

    return inch
}

console.log('Inch:', feetToInch(5));



// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

// Ans:
function centimeterToMeter(centimeter){
    const meter = centimeter / 100;

    return meter;
}

console.log('Meter:', centimeterToMeter(10));




// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// এইবার ভালো করে খেয়াল করো। 

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 



// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

// Ans:

function paperRequirements(book1, book2, book3){
    let firstBookPaper = 100;
    let secondBookPaper = 200;
    let thirdBookPaper = 300;

    let firstBookPaperTotal = book1 * firstBookPaper;
    let secondBookPaperTotal = book2 * secondBookPaper;
    let thirdBookPaperTotal = book3 * thirdBookPaper;
    let totalPaper = firstBookPaperTotal + secondBookPaperTotal + thirdBookPaperTotal;

    return totalPaper;
}

let paperQty = paperRequirements(20, 2, 5);
console.log('Total paper ned:', paperQty);


// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 


// Ans:

function bestFriend(names){
    let largeName = '';
    for(let i = 0; i < names.length; i++){
        if(names[i].length > largeName.length)
        largeName = names[i]; 
    }
    return largeName;
}

let names = ['Abul', 'Kabul', 'Habul', 'Abdul Aziz', 'Abdul Al Hasan', 'Jim'];

let largeName = bestFriend(names);
console.log('Long string in array:', largeName);


var arrayOfStrings = ["This","is","a","list","of","some","short","and","some","longer","strings"];




// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

// Ans:

function positiveNumbers(number){
    let positiveNumber = [];
    for(let i = 0; i < number.length; i++){
        let element = number[i];
        if(element > 0){
            positiveNumber.push(element);
        }
        else{
            break;
        }
    }
    return positiveNumber;
}

let numbers = [10, 20, -2, 100, 3, -50, 30, -200];
let positiveNumber = positiveNumbers(numbers);
console.log(positiveNumber);

