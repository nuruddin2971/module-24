interface Student {
  name: string;
  marks: number[];
}

interface Result {
  name: string;
  average: number;
  result: string;
}

const getStudentResult = (student: Student): Result => {
  const marks = student.marks;
  const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
  const average = totalMarks / marks.length;
  const result = average >= 40 ? "Passed" : "Failed";
  return {
    name: student.name,
    average,
    result
  };
};
console.log(
  getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85],
  }),
);

console.log(
  getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25],
  }),
);
