import { capitalize, displayProperName } from "./strings.helper";

describe("#capitalize()", () => {
	it("Should convert string to capital case", () => {
		expect(capitalize("THIS")).toEqual("This");
		expect(capitalize("is")).toEqual("Is");
		expect(capitalize("tEST")).toEqual("Test");
	});
});

describe("#displayProperName()", () => {
	it("Should return comments or upvotes name", () => {
		expect(displayProperName("most upvotes")).toEqual("mostupvotes");
		expect(displayProperName("least upvotes")).toEqual("leastupvotes");
		expect(displayProperName("most comments")).toEqual("mostcomments");
		expect(displayProperName("least comments")).toEqual("leastcomments");
	});
});
