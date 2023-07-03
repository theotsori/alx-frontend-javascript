export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  }).filter((student) => student.location === city);
}
