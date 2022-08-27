import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "utils/constant";

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
};

function Button({
  children,
  width = "auto",
  variant = "violet",
}: ButtonProps): JSX.Element {
  return (
    <ButtonStyled width={width} bgc={ButtonVariant[variant]}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
