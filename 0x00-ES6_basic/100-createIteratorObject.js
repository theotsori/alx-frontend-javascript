export default function createIteratorObject(report) {
  let departments = Object.values(report);
  let employees = [];

  departments.forEach((department) => {
    employees = employees.concat(Object.values(department));
  });

  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < employees.length) {
        return {
          value: employees[currentIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
