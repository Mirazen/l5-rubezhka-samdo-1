export default class NumberSchema {
    number(num) {
        return typeof num === 'number' && !isNaN(num);
    }

    isValid(num) {
        return this.number(num);
    }
}
