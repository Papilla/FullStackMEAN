import { EnhancedCalculator } from "./enhancedCalculator.js";
import enhancedCalculatorHandler from "./enhancedCalculatorHandler.js";
import { patchCalculator } from "./patchCalculator.js";
import { StackCalculator } from "./stackCalculator.js";

const calculator = new StackCalculator();
// const enhancedCalculator = new EnhancedCalculator(calculator);
// const enhancedCalculator = patchCalculator(calculator);
const enhancedCalculator = new Proxy(calculator, enhancedCalculatorHandler);

enhancedCalculator.putValue(4);
enhancedCalculator.putValue(3);
console.log(enhancedCalculator.multiply());
enhancedCalculator.putValue(2);
console.log(enhancedCalculator.divide());
enhancedCalculator.putValue(1);
console.log(enhancedCalculator.add());