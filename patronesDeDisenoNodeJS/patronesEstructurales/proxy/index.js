import { patchSafeCalculator } from "./patchSafeCalculator.js";
import { SafeCalculator } from "./safeCalculator.js";
import safeCalculatorHandler from "./safeCalculatorHandler.js";
import { StackCalculator } from "./stackCalculator.js";

const calculator = new StackCalculator();
// calculator.putValue(3);
// calculator.putValue(3);
// console.log(calculator.multiply());
// calculator.putValue(3);
// console.log(calculator.divide());

// const safeCalculator = new SafeCalculator(calculator);
// const safeCalculator = patchSafeCalculator(calculator);
const safeCalculator = new Proxy(calculator, safeCalculatorHandler);
safeCalculator.putValue(6);
safeCalculator.putValue(6);
console.log(safeCalculator.multiply());
safeCalculator.putValue(0);

try {
    console.log(safeCalculator.divide());
} catch (error) {
    console.error(`Error: ${error.message}`);
}