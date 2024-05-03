function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printString(string) {
    console.log("STARTED: " + string);
    await delay(Math.floor(Math.random() * 100) + 1);
    console.log(string);
}

async function printAll() {
    await printString("A");
    await printString("B");
    await printString("C");
}

printAll();
// expected result in console:
// A
// B
// C