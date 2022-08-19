import { useState } from "react";
import styled from "styled-components";
import { COLORS, CONSTANT_VARIABLES } from "utils/constant";

const Overlay = styled.div`
  position: fixed;
  display: none;
  top: ${CONSTANT_VARIABLES.headerHeight};
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.black};
  opacity: 0.5;
`;

const DrawerStyled = styled.aside`
  position: absolute;
  transform: translateX(100%);
  top: 0;
  right: 0;
  bottom: 0;
  width: 271px;
  height: 100%;
  background-color: ${COLORS.white};
`;

function Drawer(): JSX.Element {
  return (
    <Overlay>
      <DrawerStyled></DrawerStyled>
    </Overlay>
  );
}

export default Drawer;
