import { Cpp } from "./js/subjects/Cpp";
import { Java } from "./js/subjects/Java";
import { React } from "./js/subjects/React";

export const cpp: Subjects.Cpp = new Cpp();
export const java: Subjects.Java = new Java();
export const react: Subjects.React = new React();
export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
