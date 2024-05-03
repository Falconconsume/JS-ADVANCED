function addString(previous, current) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve(previous + ' ' + current);
            },
            Math.floor(Math.random() * 100) + 1
        );
    });
}

function addAll() {
    addString("A", "B")
        .then(result => addString(result, "C"))
        .then(finalResult => console.log(finalResult))
        .catch(error => console.error(error));
}

addAll();
// A B C
