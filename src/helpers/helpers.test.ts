import { capitalize } from "./strings.helper";

describe("#capitalize()", () => {
  it("Should convert string to capital case", () => {
    expect(capitalize("THIS")).toEqual("This");
    expect(capitalize("is")).toEqual("Is");
    expect(capitalize("tEST")).toEqual("Test");
  });
});
