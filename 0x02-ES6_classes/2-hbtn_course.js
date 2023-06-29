export default class HolbertonCourse {
  constructor(String, Number, ...Strings) {
    this._name = String;
    this._length = Number;
    this._students = Strings;
  }

  // Getter
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setter
  set name(String) {
    this._name = String;
  }

  set length(Number) {
    this._length = Number;
  }

  set students(Strings) {
    this._students = Strings;
  }
}
