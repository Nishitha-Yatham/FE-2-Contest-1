/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(arr => {
    if (arr.marks > 50) {
      console.log(arr);
    }
  });
}


function PrintStudentsbyForEach() {
  arr.forEach(arr =>{
    if (arr.marks > 50) {
      console.log(arr);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newobj={
    id:4,name:"susan",age:"20",marks:45
  }
    arr.push(newobj);
    console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(arr => arr.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  let newArray=[
    {id: 5, name: "Sandya", age: "29", marks: 62},
    {id: 6, name: "Nishi", age: "22", marks: 70},
    {id: 7, name: "Sri", age: "23", marks: 81}
  ]
  let ConcatArray = arr.concat(newArray);
  console.log(ConcatArray);
}
