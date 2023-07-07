namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    public setTeacher(teacher: Subjects.Teacher): void {
      this.teacher = teacher;
    }
  }
}
