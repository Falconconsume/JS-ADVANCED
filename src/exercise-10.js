function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addString(previous, current) {
    await delay(Math.floor(Math.random() * 100) + 1);
    return (previous + ' ' + current);
}

async function addAll() {
    let result = await addString('', 'A');
    result = await addString(result, 'B');
    result = await addString(result, 'C');
    console.log(result);
}

addAll();
// expected result in console:
// A B C
