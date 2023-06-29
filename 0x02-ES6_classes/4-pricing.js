import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Number;
    this._currency = Currency;

    this.amount = amount;
    this.currency = currency;
  }

  // Getter
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setter
  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Name must be a number');
    }
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Currency must be Currency');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
