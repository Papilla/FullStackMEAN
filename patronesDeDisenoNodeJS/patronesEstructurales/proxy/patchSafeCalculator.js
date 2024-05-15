export function patchSafeCalculator(calculator) {
    const divideOrigin = calculator.divide;
    calculator.divide = () => {
        const divisor = calculator.peekValue();
        if (divisor === 0) {
            throw Error('Division entre 0 no está permitida');
        }
        return divideOrigin.apply(calculator);
    };
    return calculator;
}