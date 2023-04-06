import styled from "styled-components";
import { capitalize } from "helpers/strings.helper";
import { COLORS, FONT_WEIGHT, QUERIES } from "utils/constant";
import { GroupedSuggestions } from "../Header";

type ButtonProps = {
	suggestion: GroupedSuggestions;
};

const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.6rem;

	div {
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	span:nth-child(2) {
		margin-right: auto;
		margin-left: 1.6rem;
	}

	span:nth-child(3) {
		color: ${COLORS.gray};
		font-weight: ${FONT_WEIGHT.fw_700};
	}
`;

function getColorBasedOnStatus(status: string): string {
	switch (status) {
		case "planned":
			return COLORS.orange;
		case "in-progress":
			return COLORS.violet;
		case "live":
			return COLORS.blutLight;
		default:
			return COLORS.gray;
	}
}

function Suggestion({ suggestion }: ButtonProps): JSX.Element {
	return (
		<ListItem>
			<div style={{ backgroundColor: getColorBasedOnStatus(suggestion.status) }}></div>
			<span>{capitalize(suggestion?.status)}</span>
			<span>{suggestion?.suggestions?.length}</span>
		</ListItem>
	);
}

export default Suggestion;
