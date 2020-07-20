const student={
  name:"helsinki",
  age: 24,
  projects:{
    dicename:"two player dice game using javascript",
  }
}
const {name,age,projects:{dicename}}=student;
console.log(name);
console.log(age);
console.log(dicename);
