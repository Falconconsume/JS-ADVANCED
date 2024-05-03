function addString(previous, current, callback) {
    setTimeout(() => {
        const result = previous + ' ' + current;
        callback(result);
    }, Math.floor(Math.random() * 100) + 1);
}

function addAll() {
    addString('', 'A', (result1) => {
        addString(result1, 'B', (result2) => {
            addString(result2, 'C', (result3) => {
                console.log(result3.trim());
            });
        });
    });
}

addAll();
// A B C