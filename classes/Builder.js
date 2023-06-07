/**
 * Builder class
*/
export default function Builder(element) {
  this.element = element;
}

// For number: Method that takes infinite number of integers and sum all with stored value
// For string: Method that takes infinite number of strings and concat with stored string
Builder.prototype.plus = function(...arg) {
  if (typeof this.element === 'number') {
    let result = arg.reduce((sum, elem) => {
      return (sum += elem);
    });
    this.element += result;
  } else if (typeof this.element === 'string') {
    for (let i=0; i< arg.length; i++) {
      this.element = this.element.concat(arg[i]);
    }
  }
  return this;
};

// For number: Method that takes infinite number of integers and subtract from stored value
// For string: Method that cuts last n chars from stored string
Builder.prototype.minus = function(...arg) {
  if (typeof this.element === 'number') {
    let result = arg.reduce((sum, elem) => {
      return (sum -= elem);
    }, this.element);
    this.element = result;
  } else if (typeof this.element === 'string') {
    this.element = this.element.slice(0, -arg);
  }
  return this;
};

// For number: Method that multiplys param n on stored value
// For string: Method that repeats stored strings n times
Builder.prototype.multiply = function(n) {
  if (typeof this.element === 'number') {
    this.element *= n;
  } else if (typeof this.element === 'string') {
    this.element = this.element.repeat(n);
  }
  return this;
};

// For number: Method that leaves integer part of division stored value on n
// For string: Method that leaves first k chars of stored string, where k = Math.floor(str.length / n)
Builder.prototype.divide = function(n) {
  if (typeof this.element === 'number') {
    this.element /= n;
  } else if (typeof this.element === 'string') {
    let k = Math.floor(this.element.length / n);
    this.element = this.element.slice(0, k);
  }
  return this;
};

// Method that returns stored value
Builder.prototype.get = function() {
  return this.element;
};