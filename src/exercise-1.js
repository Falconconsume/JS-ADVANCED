function getInfo(...values) {
    let results = [];
    values.forEach((value, index) => {
        const isFalsy = !value;
        const type = typeof value;
        const stringLength = String(value).length;

        results.push({
            isFalsy,
            type,
            stringLength,
            index
        });

    });
    return results;
}

module.exports = getInfo;
