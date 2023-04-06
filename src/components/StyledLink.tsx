import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "utils/constant";

interface Props {
	children: React.ReactNode;
	to: string;
}

const LinkWrapper = styled(Link)`
	font-size: 1.3rem;
	font-weight: ${FONT_WEIGHT.fw_600};
	color: ${COLORS.blue};
`;

export function StyledLink({ children, to }: Props) {
	return <LinkWrapper to={to}>{children}</LinkWrapper>;
}
