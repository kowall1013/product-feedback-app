import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 72px;
  display: grid;
  align-items: center;
  background-image: linear-gradient(
    70deg,
    hsl(201deg 85% 54%) 0%,
    hsl(216deg 86% 55%) 4%,
    hsl(230deg 87% 56%) 8%,
    hsl(245deg 89% 57%) 14%,
    hsl(259deg 90% 58%) 20%,
    hsl(274deg 91% 59%) 28%,
    hsl(289deg 88% 59%) 38%,
    hsl(303deg 85% 60%) 52%,
    hsl(317deg 82% 60%) 69%,
    hsl(332deg 80% 60%) 87%,
    hsl(346deg 77% 61%) 100%
  );
`;

function Header(): JSX.Element {
  return <HeaderStyled>Header</HeaderStyled>;
}

export default Header;
