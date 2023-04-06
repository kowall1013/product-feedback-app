export const capitalize = (item: string) => {
	if (item) {
		const lowered = item.toLowerCase();
		return lowered.replace(lowered[0], lowered[0].toUpperCase());
	}
};

type DisplayReturnValue =
	| "mostupvotes"
	| "leastupvotes"
	| "mostcomments"
	| "leastcomments";

export const displayProperName = (name: string): DisplayReturnValue => {
	const nameLower = name.toLowerCase();

	if (nameLower === "most upvotes") return "mostupvotes";
	if (nameLower === "least upvotes") return "leastupvotes";
	if (nameLower === "most comments") return "mostcomments";
	if (nameLower === "least comments") return "leastcomments";

	return "mostupvotes";
};
