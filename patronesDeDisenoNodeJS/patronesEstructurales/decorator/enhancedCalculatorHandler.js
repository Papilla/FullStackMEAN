const enhancedCalculatorHandler = {
    get(target, property) {
        if (property === 'add') {
            return function add() {
                const addend1 = this.getValue();
                const addend2 = this.getValue();
                const result = addend1 + addend2;
                this.putValue(result);
                return result;
            }
        } else if (property === 'divide') {
            return function () {
                const divisor = target.peekValue();
                if (divisor === 0) {
                    throw Error('Division entre 0 no permitida');
                }
                return target.divide();
            };
        }
        return target[property];
    },
};
export default enhancedCalculatorHandler;