import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { COLORS, FONT_WEIGHT } from "utils/constant";
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
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

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
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  return (
    <MenuContainer>
      <Button>Sort by: Most Upvotes</Button>
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
