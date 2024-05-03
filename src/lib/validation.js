

function validate(schema, values) {
    const invalidKeys = [];

    for (const key in schema) {
        const validateFn = schema[key];
        const value = values[key];

        if (!validateFn(value)) {
            invalidKeys.push(key);
        }
    }

    return invalidKeys;
}

module.exports = {validate};
