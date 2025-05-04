// Variables
var FirstName = "Reyver"; //value can be change
let Age; //value can be overide but cannot be called twice with let
Age = 25;
const Surname = "Bautista" //value must be declared first as it cannot be overide value is always constant with const

console.log(`${FirstName} ${Surname} is already ${Age} years old.`); //string manipulation

// data types
const str = "This is string"; //string
const num = 1234567890.123 //number
const amipogi = true; //boolean
const novalue = null; //null
const unk = undefined; //undifined

console.log(typeof str);
console.log(typeof num);
console.log(typeof amipogi);
console.log(typeof novalue);
console.log(typeof unk);

// array
// fruits.push - add new to array last index
// fruits.pop - remove array last index
// fruits.unshift - add new to array start index
// fruits.shift - remove array first index
const fruits = ["Apple", "Banana", "Chico", "Dalandan"]; //this is how to initialize array
console.log(fruits); //this is how to display array


//object
//this is how to initialize object
const gradesObj = {
    science: 99,
    math: 99,
    english: 99,
    filipino: 90
}
// you can create object inside the object
const motor = {
    brand: "honda",
    model: "click",
    color: "black",
    accesories: {
        back: "topbox",
        front: "wind shield",
        dashboard: "phone holder"
    }
}

console.log(motor.brand); //this is how to display object property
console.log(motor.accesories.front); // this is how to display object property inside the object.

//array objects
//this is how to initialize array object
const ict2p = [
    {
        id: 1,
        fullname: "aerol tomarse",
        gender: "male"
    },
    {
        id: 2,
        fullname: "jerome manliclic",
        gender: "male"
    },
    {
        id: 3,
        fullname: "mikel dagang",
        gender: "male"
    },
    {
        id: 4,
        fullname: "kim tabilog",
        gender: "female"
    },
    {
        id: 5,
        fullname: "rica bautista",
        gender: "female"
    }
]

console.log(ict2p[0]); //this is how to call array index
console.log(ict2p[0].fullname); //this is how to call object property inside the array.

//for loop
const arrGrade = [99 , 90, 93, 92];
var totalGrade = 0 //initialize the totalgrade first to accumulate grades
for(var i = 0; i < arrGrade.length; i++){
    var grades = arrGrade[i];
    totalGrade += grades;
    var ave = totalGrade / arrGrade.length;
}
console.log(`your average grade is ${ave}`);

//while loop
let sumofGrade = 0;
let aveGrade = 0;
let y = 0;
while(y < arrGrade.length){
    let grado = arrGrade[y];
    sumofGrade = grado + sumofGrade;
    aveGrade = sumofGrade / arrGrade.length;
    y++;
}
console.log(aveGrade);
console.log(sumofGrade);

//most optimized loop for array
//for of
for(let student2p of ict2p){
    console.log(student2p.fullname);
}

// map through array
// this is how to display array object's property in array form.
const studentFullname = ict2p.map(
    function(student){
        return student.fullname;
    }
)
console.log(studentFullname);

// filter the array
// this is how to filter array
const femaleStudent = ict2p.filter(
    function(student){
        return student.gender == "female";
    }
)
console.log(femaleStudent);