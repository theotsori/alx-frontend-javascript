interface DirectorInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  getCoffeBreak(): string {
    throw new Error("Method not implemented.");
  }
  workFromHome(): string {
    return 'Working from home';
  }

  getToWork(): any {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeBreak(): string {
    return 'Getting a coffee break';
  }

  workTeacherTasks(): string {
    return 'Getting to tasks';
  }
}

export function createEmployee(salary: number | string) {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

export function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teacherClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    throw new Error('Invalid subject');
  }
}
