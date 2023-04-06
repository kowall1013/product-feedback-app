import styled from "styled-components";
import { COLORS, FONT_WEIGHT, QUERIES } from "utils/constant";

export const Paragraph = styled.p`
	font-weight: ${FONT_WEIGHT.fw_400};
	font-size: 1.3rem;
	color: ${COLORS.gray};
	margin-bottom: 0.8rem;

	@media ${QUERIES.tabletAndUp} {
		font-size: 1.6rem;
	}
`;
