
const ValidationTypes = {
    string: value => typeof value === 'string',
    number: value => typeof value === 'number' && !isNaN(value),
    any: () => true
};

module.exports = ValidationTypes;
