interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  location: "Malyasia",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 21,
  location: "Japan",
};

const studentsList: Student[] = [student1, student2]

function renderTable(): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const fNameCell = document.createElement('td');
    fNameCell.textContent = student.firstName;
    row.appendChild(fNameCell);

    const lCell = document.createElement('td');
    lCell.textContent = student.location;
    row.appendChild(lCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

renderTable();
