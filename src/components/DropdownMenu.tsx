import { useRef } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "utils/constant";
import { useOutsideClick } from "hooks/useOutsideClick";
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

function DropdownMenu(): JSX.Element {
  const dropdownRef = useRef<HTMLElement>(null);

  const onClick = () => setIsActive(!isActive);

  const [isActive, setIsActive] = useOutsideClick(dropdownRef, false);

  return (
    <MenuContainer>
      <Button onClick={onClick}>Sort by: Most Upvotes</Button>

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
