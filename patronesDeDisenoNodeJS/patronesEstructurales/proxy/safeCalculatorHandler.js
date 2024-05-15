const safeCalculatorHandler = {
    get: (target, property) => {
        if (property === 'divide') {
            const divisor = target.peekValue();
            if (divisor === 0) {
                throw Error('Division entre 0 no está permitida');
            }
            return target.divide();
        }
        return target[property];
    },
};

export default safeCalculatorHandler;