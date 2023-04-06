import styled from "styled-components";
import { COLORS } from "utils/constant";
const CardWrapper = styled.div`
	background-color: ${COLORS.white};
	padding: 24px;
	border-radius: 10px;
`;

interface Props {
	children: React.ReactNode;
}

export function Card({ children, ...rest }: Props) {
	return <CardWrapper {...rest}>{children}</CardWrapper>;
}
