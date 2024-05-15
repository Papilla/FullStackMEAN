export function patchCalculator(calculator) {
    calculator.add = function() {
        const addend1 = this.getValue();
        const addend2 = this.getValue();
        const result = addend1 + addend2;
        this.putValue(result);
        return result;
    };

    const divideOriginal = calculator.divide;
    calculator.divide = () => {
        const divisor = calculator.peekValue();
        if (divisor === 0) {
            throw Error('Division entre 0 no permitida');
        }
        return divideOriginal.apply(calculator);
    };
    return calculator;
}