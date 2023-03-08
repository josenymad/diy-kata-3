const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123456789)).toEqual([
      9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
    expect(numberToReversedDigits(987)).toEqual([7, 8, 9]);
    expect(numberToReversedDigits(25)).toEqual([5, 2]);
  });
});
