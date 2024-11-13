import NumberSchema from './NumberSchema.js'
import ArraySchema from './ArraySchema.js'

export default class Validator {
    number() {
        return new NumberSchema();
    }
    array() {
        return new ArraySchema();
    }
}

const v = new Validator();

const schema1 = v.array();
console.log(schema1.isValid([])); // true;
console.log(schema1.isValid([1,2])); // true;
console.log(schema1.isValid(12)); // false;
console.log(schema1.isValid({})); // false;

const schema2 = v.array().allIntegers();
console.log(schema1.isValid([])); // true;
console.log(schema1.isValid([1,2])); // true;
console.log(schema1.isValid([12, 'b'])); // false;
console.log(schema1.isValid({})); // false;
console.log(schema1.isValid([1.2, 1, 2])); // false;
console.log(schema1.isValid([122n, 0])); // true;
