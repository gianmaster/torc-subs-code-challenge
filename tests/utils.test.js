const { roundDecimalToTheNearest05 } = require("../src/utils");

describe("roundDecimalToTheNearest05", () => {
  it("should throw an error if the argument is not a number", () => {
    expect(() => {
      roundDecimalToTheNearest05("hello");
    }).toThrow("roundDecimalToTheNearest05 must receive a number");

    expect(() => {
      roundDecimalToTheNearest05([2, 3, 4]);
    }).toThrow("roundDecimalToTheNearest05 must receive a number");

    expect(() => {
      roundDecimalToTheNearest05({ a: 1, b: 2 });
    }).toThrow("roundDecimalToTheNearest05 must receive a number");
  });

  it("should round a decimal to the nearest 0.05", () => {
    expect(roundDecimalToTheNearest05(1.01)).toBe(1.05);
    expect(roundDecimalToTheNearest05(1.02)).toBe(1.05);
    expect(roundDecimalToTheNearest05(1.03)).toBe(1.05);
    expect(roundDecimalToTheNearest05(1.04)).toBe(1.05);
    expect(roundDecimalToTheNearest05(1.05)).toBe(1.05);
    expect(roundDecimalToTheNearest05(1.06)).toBe(1.1);
    expect(roundDecimalToTheNearest05(1.07)).toBe(1.1);
    expect(roundDecimalToTheNearest05(1.08)).toBe(1.1);
    expect(roundDecimalToTheNearest05(1.09)).toBe(1.1);
    expect(roundDecimalToTheNearest05(1.1)).toBe(1.1);
    expect(roundDecimalToTheNearest05(1.11)).toBe(1.15);
    expect(roundDecimalToTheNearest05(1.12)).toBe(1.15);
  });
});
