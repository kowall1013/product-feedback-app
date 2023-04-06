import styled from "styled-components";
import { COLORS, FONT_WEIGHT, QUERIES } from "utils/constant";

type ButtonStyledProps = {
	width: string;
	bgc: string;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	padding: 0 16px;
	border: none;
	font-size: 1.3rem;
	font-weight: ${FONT_WEIGHT.fw_700};
	width: ${({ width }) => width};
	background-color: ${({ bgc }) => bgc};
	color: ${COLORS.white};
	height: 40px;
	cursor: pointer;
	transition: filter 0.2s ease;
	min-width: 10rem;

	&:hover,
	&:focus {
		filter: brightness(1.1);
	}

	&:foucs {
		outline: none;
	}

	@media ${QUERIES.tabletAndUp} {
		font-size: 1.4rem;
	}
`;

const ButtonVariant = {
	violet: COLORS.violet,
	blue: COLORS.blue,
	dark: COLORS.dark,
	orange: COLORS.orange,
};

type ButtonProps = {
	children: React.ReactNode;
	width?: string;
	variant?: "violet" | "blue" | "dark" | "orange";
	onClick?: () => void;
};

function Button({ children, width = "auto", variant = "violet", onClick, ...rest }: ButtonProps): JSX.Element {
	return (
		<ButtonStyled width={width} bgc={ButtonVariant[variant]} onClick={onClick} {...rest}>
			{children}
		</ButtonStyled>
	);
}

export default Button;
