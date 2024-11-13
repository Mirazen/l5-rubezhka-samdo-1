// ArraySchema.js
export default class ArraySchema {
    constructor() {
        this.customValidator = null; // Кастомный валидатор отсутствует по умолчанию
        this.checkAllIntegers = false; // Проверка целых чисел отключена по умолчанию

        // Базовая проверка — значение должно быть массивом
        this.isValid = (data) => Array.isArray(data);
    }

    // Метод allIntegers включает проверку всех элементов на целые числа
    allIntegers() {
        const previousIsValid = this.isValid; // Сохраняем текущий метод isValid

        // Переопределяем метод isValid для проверки целых чисел
        this.isValid = (data) => {
            // Проверяем, что это массив
            if (!previousIsValid(data)) {
                return false;
            }

            // Проверяем, что все элементы являются целыми числами
            const isAllIntegers = data.every(
                (item) => Number.isInteger(item) || typeof item === 'bigint'
            );

            return isAllIntegers;
        };

        return this; // Возвращаем текущий экземпляр для цепочного вызова
    }

    // Метод custom позволяет задать кастомный валидатор для элементов массива
    custom(validatorFn) {
        const previousIsValid = this.isValid; // Сохраняем текущий метод isValid

        // Переопределяем метод isValid для кастомной валидации
        this.isValid = (data) => {
            // Проверяем, что это массив
            if (!previousIsValid(data)) {
                return false;
            }

            // Проверяем каждый элемент массива кастомным валидатором
            return data.every((item) => validatorFn(item));
        };

        return this; // Возвращаем текущий экземпляр для цепочки вызовов
    }
}
