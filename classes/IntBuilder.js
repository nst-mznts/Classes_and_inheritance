import Builder from "./Builder.js";
/**
 * ES6 class IntBuilder
*/
export default class IntBuilder extends Builder {
  constructor(element) {
    super(element);
  }
  // Method that leaves remainder of the division stored value with on n
  mod(n) {
    this.element %= n;
    return this;
  }
  // Static method; from, to: integer; values limits the range of random values;
  static random(from, to) {
    let randomInt = from + Math.random() * (to + 1 - from);
    return Math.floor(randomInt);
  }
}