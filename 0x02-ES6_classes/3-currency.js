export default class Currency {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    this.code = code;
    this.name = name;
  }

  // Getter
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setter
  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
