import Icon from "components/icon";
import styled from "styled-components";
import { ICON_TYPE, FONT_WEIGHT, COLORS } from "utils/constant";

const HeaderStyled = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

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

const TitleWrapper = styled.div`
  h1 {
    font-size: 1.5rem;
    line-height: 21.68px;
    letter-spacing: -0.19px;
    font-weight: ${FONT_WEIGHT.fw_700};
    color: ${COLORS.white};
  }

  span {
    font-size: 1.3rem;
    line-height: 18.79px;
    font-weight: ${FONT_WEIGHT.fw_500};
    color: ${COLORS.white};
    opacity: 0.75;
  }
`;

function Header(): JSX.Element {
  return (
    <HeaderStyled>
      <TitleWrapper>
        <h1>Frontend Mentor</h1>
        <span>Feedback Board</span>
      </TitleWrapper>
      <Icon type={ICON_TYPE.hamburger} />
    </HeaderStyled>
  );
}

export default Header;
