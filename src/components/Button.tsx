import styled from "styled-components";
import { FONT_WEIGHT } from "utils/constant";

const ButtonStyled = styled.button`
  display: inline-block;
  border-radius: 10px;
  padding: 13px 8px 11px 8px;
  border: none;
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.fw_700};
`;

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps): JSX.Element {
  return <ButtonStyled>{children}</ButtonStyled>;
}

export default Button;
