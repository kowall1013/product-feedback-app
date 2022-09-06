import { useRef, useState, useCallback } from "react";
import styled, { css } from "styled-components";
import { COLORS, FONT_WEIGHT } from "utils/constant";
import useOutsideClick from "hooks/useOutsideClick";
import Button from "./Button";

const MenuContainer = styled.div`
  position: relative;
`;
const ButtonTriggier = styled.button``;

type NavProps = {
  active: boolean;
};

const Nav = styled.nav<NavProps>`
  background-color: ${COLORS.white};
  border-radius: 10px;
  position: absolute;
  top: 60px;
  left: 8px;
  transform: translateY(-20px);
  border: none;
  width: 255px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  &:foucs {
    outline: none;
  }

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}

  li {
    border-bottom: 1px solid #dddddd;
    padding: 15px 20px;
  }
`;

type ButtonStyledProps = {
  isActive: boolean;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${COLORS.grayLight};

  span {
    font-weight: ${FONT_WEIGHT.fw_700};
    margin-right: 8px;
    margin-left: 4px;
  }

  svg {
    transform: ${({ isActive }) => (isActive ? "rotate(0)" : "rotate(180deg)")};
    transition: transform 0.4s ease;
  }
`;

function DropdownMenu(): JSX.Element {
  const dropdownRef = useRef<HTMLElement>(null);
  const handlerRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);
  const onOutsideClick = useCallback(() => {
    setIsActive(false);
  }, []);

  useOutsideClick(dropdownRef, handlerRef, onOutsideClick);

  return (
    <MenuContainer>
      <ButtonStyled ref={handlerRef} onClick={onClick} isActive={isActive}>
        Sort by: <span>Most Upvotes</span>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 6l4-4 4 4"
            stroke="#F2F4FE"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </ButtonStyled>
      <Nav ref={dropdownRef} active={isActive}>
        <ul>
          <li>Most Upvotes</li>
          <li>Least Upvotes</li>
          <li>Most Comments</li>
          <li>Least Comments</li>
        </ul>
      </Nav>
    </MenuContainer>
  );
}

export default DropdownMenu;
