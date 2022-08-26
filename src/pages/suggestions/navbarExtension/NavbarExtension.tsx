import Button from "components/Button";
import styled from "styled-components";
import { COLORS } from "utils/constant";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  background-color: ${COLORS.dark};
`;

function NavbarExtension(): JSX.Element {
  return (
    <Wrapper>
      <div>
        <span>Sort by: </span>
      </div>
      <Button>Add Feedback</Button>
    </Wrapper>
  );
}

export default NavbarExtension;
