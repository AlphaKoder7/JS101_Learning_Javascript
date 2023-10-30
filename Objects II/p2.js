const grades = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] }
    ]
  }
];

for (const gradeInfo of grades) {
  let highestScore = 0;
  let highestScorer = "";

  for (const student of gradeInfo.students) {
    let totalMarks = 0;
    for (const mark of student.marks) {
      totalMarks += mark;
    }

    if (totalMarks > highestScore) {
      highestScore = totalMarks;
      highestScorer = student.name;
    }
  }

  console.log(`${gradeInfo.grade}-${highestScorer}-${highestScore}`);
}
