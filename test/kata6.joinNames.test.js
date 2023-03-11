const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "Bart",
        },
        {
          name: "Lisa",
        },
        {
          name: "Maggie",
        },
      ])
    ).toEqual("Bart, Lisa & Maggie");
    expect(
      joinNames([
        {
          name: "Chandler",
        },
        {
          name: "Monica",
        },
        {
          name: "Phoebe",
        },
        {
          name: "Rachel",
        },
        {
          name: "Ross",
        },
        {
          name: "Joey",
        },
      ])
    ).toEqual("Chandler, Monica, Phoebe, Rachel, Ross & Joey");
  });
});
