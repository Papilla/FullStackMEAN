export class SafeCalculator {
    constructor(calculator) {
        this.calculator = calculator;
    }

    putValue(value) {
        return this.calculator.putValue(value);
    }

    getValue() {
        return this.calculator.getValue();
    }

    peekValue() {
        return this.calculator.peekValue();
    }

    clear() {
        return this.calculator.clear();
    }

    multiply() {
        return this.calculator.multiply();
    }

    divide() {
        const divisor = this.calculator.peekValue();
        if (divisor === 0) {
            throw Error('Division entre 0 no está permitida');
        }
        return this.calculator.divide();
    }
}