import Button from "components/Button";
import DropdownMenu from "components/DropdownMenu";
import Icon from "components/Icon";
import styled from "styled-components";
import { COLORS, ICON_TYPE } from "utils/constant";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  background-color: ${COLORS.dark};
  padding: 0 24px;
`;

const ContentButton = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

function NavbarExtension(): JSX.Element {
  return (
    <Wrapper>
      <DropdownMenu />
      <Button>
        <ContentButton>
          <Icon type={ICON_TYPE.plus} />
          Add Feedback
        </ContentButton>
      </Button>
    </Wrapper>
  );
}

export default NavbarExtension;
