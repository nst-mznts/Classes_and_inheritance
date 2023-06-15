import IntBuilder from "./classes/IntBuilder.js";
import StringBuilder from "./classes/StringBuilder.js";

console.log(IntBuilder.random(10, 100));
const intBuilder = new IntBuilder(10);
intBuilder
  .plus(2, 3, 2)
  .minus(1, 2)
  .multiply(2)
  .divide(4)
  .mod(3)
  .get();
console.log(intBuilder);

const stringBuilder = new StringBuilder("Hello");
stringBuilder
  .plus(" all", "!")
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove("l")
  .sub(1, 1)
  .get();
console.log(stringBuilder);