const faker = require('faker');
const Student = require("../Student.js")


console.log("message: ", Student);

//console.log(faker.name.firstName());

let students = [];




for(let i = 0; i < 10; i++) {
    const student = new Student(faker.name.firstName() + ' ' + faker.name.lastName());
    //console.log(faker.name.firstName(), faker.name.lastName());
    //console.log(student.name);
    students.push(student.name);
}

console.log(students);