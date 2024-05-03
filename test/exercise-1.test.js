"use strict";

const getInfo = require("../src/exercise-1");

test("test1", () => {
    let result = getInfo(...[1, 0, "0", "255", NaN, +0, -0, "abc", ["abc"], new Boolean(false), true]);
    expect(result.length).toEqual(11);

    expect(result[0].isFalsy).toEqual(false);
    expect(result[0].type).toEqual("number");
    expect(result[0].stringLength).toEqual(1);
    expect(result[0].index).toEqual(0);

    expect(result[1].isFalsy).toEqual(true);
    expect(result[1].type).toEqual("number");
    expect(result[1].stringLength).toEqual(1);
    expect(result[1].index).toEqual(1);

    expect(result[2].isFalsy).toEqual(false);
    expect(result[2].type).toEqual("string");
    expect(result[2].stringLength).toEqual(1);
    expect(result[2].index).toEqual(2);

    expect(result[3].isFalsy).toEqual(false);
    expect(result[3].type).toEqual("string");
    expect(result[3].stringLength).toEqual(3);
    expect(result[3].index).toEqual(3);

    expect(result[4].isFalsy).toEqual(true);
    expect(result[4].type).toEqual("number");
    expect(result[4].stringLength).toEqual(3);
    expect(result[4].index).toEqual(4);

    expect(result[5].isFalsy).toEqual(true);
    expect(result[5].type).toEqual("number");
    expect(result[5].stringLength).toEqual(1);
    expect(result[5].index).toEqual(5);

    expect(result[6].isFalsy).toEqual(true);
    expect(result[6].type).toEqual("number");
    expect(result[6].stringLength).toEqual(1);
    expect(result[6].index).toEqual(6);

    expect(result[7].isFalsy).toEqual(false);
    expect(result[7].type).toEqual("string");
    expect(result[7].stringLength).toEqual(3);
    expect(result[7].index).toEqual(7);

    expect(result[8].isFalsy).toEqual(false);
    expect(result[8].type).toEqual("object");
    expect(result[8].stringLength).toEqual(3);
    expect(result[8].index).toEqual(8);

    expect(result[9].isFalsy).toEqual(false);
    expect(result[9].type).toEqual("object");
    expect(result[9].stringLength).toEqual(5);
    expect(result[9].index).toEqual(9);

    expect(result[10].isFalsy).toEqual(false);
    expect(result[10].type).toEqual("boolean");
    expect(result[10].stringLength).toEqual(4);
    expect(result[10].index).toEqual(10);
});
