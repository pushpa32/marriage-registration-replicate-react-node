export const notEmptyValidator = function (value, field) {
    if (!value || value === '') {
        throw new Error(field + ' must not be empty');
    }
};

export const lengthValidator = function (value, min, max, field) {
    if (!value || value.length < min || value.length > max) {
        throw new Error(`${field} length must be between ${min} and ${max}`);
    }
};

export function isEmailValidator(value, field) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        throw new Error(`${field} must be a valid email`);
    }
}
