function printString(string, callback) {
    console.log("STARTED: " + string);
    setTimeout(
        () => {
            console.log(string);
            callback();
        },
        Math.floor(Math.random() * 100) + 1
    );
}

function printAll() {
    printString("A", function () {
        printString("B", function () {
            printString("C", function () {

            });
        });
    });
}

printAll();
// expected result in console:
// A
// B
// C