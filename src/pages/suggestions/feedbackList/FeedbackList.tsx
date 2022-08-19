import styled from "styled-components";
import { COLORS } from "utils/constant";

const Wrapper = styled.div`
  background-color: ${COLORS.white};
  height: 100vh;
`;
const FeedbackListStyled = styled.ul``;

function FeedbackList(): JSX.Element {
  return (
    <Wrapper>
      <FeedbackListStyled />
    </Wrapper>
  );
}

export default FeedbackList;
