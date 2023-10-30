const StudentRecord = {
  students: [],

  addStudent(name, subject1, subject2, subject3) {
    this.students.push({
      name: name,
      marks: [subject1, subject2, subject3],
    });
  },

  findStudentWithLeastTotal() {
    if (this.students.length === 0) {
      return "No students added yet.";
    }

    let minTotal = Infinity;
    let studentWithLeastTotal = null;

    for (const student of this.students) {
      const totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);

      if (totalMarks < minTotal) {
        minTotal = totalMarks;
        studentWithLeastTotal = student;
      }
    }

    return studentWithLeastTotal;
  },

  findStudentWithHighestTotal() {
    if (this.students.length === 0) {
      return "No students added yet.";
    }

    let maxTotal = -Infinity;
    let studentWithHighestTotal = null;

    for (const student of this.students) {
      const totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);

      if (totalMarks > maxTotal) {
        maxTotal = totalMarks;
        studentWithHighestTotal = student;
      }
    }

    return studentWithHighestTotal;
  },
};


StudentRecord.addStudent("John", 90, 85, 88);
StudentRecord.addStudent("Alice", 78, 92, 89);
StudentRecord.addStudent("Bob", 85, 79, 93);

const studentWithLeastTotal = StudentRecord.findStudentWithLeastTotal();
const studentWithHighestTotal = StudentRecord.findStudentWithHighestTotal();

console.log("Student with the least total:", studentWithLeastTotal.name);
console.log("Student with the highest total:", studentWithHighestTotal.name);