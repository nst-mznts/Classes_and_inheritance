import Builder from "./Builder.js";
/**
 * ES5 class StringBuilder
*/
export default function StringBuilder(str='') {
    Builder.call(this, str);
}
StringBuilder.prototype = Object.create(Builder.prototype);

// Method that removes taken string str from stored
StringBuilder.prototype.remove = function(str) {
    let arr = this.element
      .split("")
      .filter((item) => item !== str)
      .join("");
    this.element = arr;
    return this;
};

// Method that leaves substring starting from and with length n
StringBuilder.prototype.sub = function(from, n) {
    this.element = this.element.substr(from, n);
    return this;
}