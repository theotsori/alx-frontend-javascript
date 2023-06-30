export default function createIteratorObject(report) {
  const departments = Object.values(report);
  const employees = [];

  departments.forEach((department) => {
    employees.push(...Object.values(department));
  });

  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < employees.length) {
        return {
          value: employees[currentIndex++],
          done: false
        };
      }

      return {
        done: true
      };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
}
