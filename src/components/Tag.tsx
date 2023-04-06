import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "utils/constant";

const StyledTag = styled.div`
	display: inline-flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	padding: 0.8rem 1.6rem;
	border-radius: 10px;
	font-weight: ${FONT_WEIGHT.fw_600};
	font-size: 1.3rem;
	color: ${COLORS.blue};
	background-color: ${COLORS.WhiteDarker};
`;

type FilteredCardProps = {
	children: React.ReactNode;
	position?: "vertical" | "horizontal";
};

function Tag({ children, ...rest }: FilteredCardProps): JSX.Element {
	return <StyledTag {...rest}>{children}</StyledTag>;
}

export default Tag;
