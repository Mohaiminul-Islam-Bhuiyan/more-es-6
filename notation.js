const student = {
    name:'kalum',
    age: 14,
    class:'ten',
    marks:{
        math: 78,
        physics: 88,
        chemistry: 77
    }
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
const marks2 = student.marks[subject];

console.log(marks2);