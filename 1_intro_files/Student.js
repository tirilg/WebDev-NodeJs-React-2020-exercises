class Student {
    // fields
    classes = [];
    constructor(studentName) {
        this.name = studentName;
        //this.classes = [];
    }

    addClass(studentClass) {
        this.classes.push(studentClass);
    }
}

const student = new Student("Lars");
student.addClass("React+Node");
student.addClass("Django");

console.log(student.classes);

module.exports = Student;
