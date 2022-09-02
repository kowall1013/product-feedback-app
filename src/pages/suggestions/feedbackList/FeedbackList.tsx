import FilteredCard from "components/FilteredCard";
import { useAppSelector } from "hooks/useAppSelector";
import styled from "styled-components";
import { COLORS } from "utils/constant";

const Wrapper = styled.div`
  background-color: ${COLORS.white};
  height: 100vh;
`;
const SuggestionsList = styled.ul``;
const SuggestionItem = styled.li``;
const Title = styled.span``;
const Description = styled.p``;

function FeedbackList(): JSX.Element {
  const suggestions = useAppSelector((state) =>
    state.feedbackList.productRequests.filter(
      (suggestion) => suggestion.status === "suggestion"
    )
  );

  console.log(suggestions);
  return (
    <Wrapper>
      <SuggestionsList>
        {suggestions.map((suggestion) => (
          <SuggestionItem>
            <Title>{suggestion.title}</Title>
            <Description>{suggestion.description}</Description>
            <FilteredCard>{suggestion.category}</FilteredCard>
            <div></div>
          </SuggestionItem>
        ))}
      </SuggestionsList>
    </Wrapper>
  );
}

export default FeedbackList;
