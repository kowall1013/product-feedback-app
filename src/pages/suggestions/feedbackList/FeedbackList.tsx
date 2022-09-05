import FilteredCard from "components/FilteredCard";
import Icon from "components/Icon";
import { capitalize } from "helpers/strings.helper";
import { useAppSelector } from "hooks/useAppSelector";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT, ICON_TYPE } from "utils/constant";

const Wrapper = styled.div`
  background-color: ${COLORS.whiteDark};
  padding: 32px 24px 55px 24px;
`;
const SuggestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
const SuggestionItem = styled.li`
  background-color: ${COLORS.white};
  padding: 24px;
  border-radius: 10px;
`;
const Title = styled.span`
  display: block;
  color: ${COLORS.darkLight};
  font-weight: ${FONT_WEIGHT.fw_700};
  font-size: 1.3rem;
  line-height: 18.79px;
  letter-spacing: -0.18px;
  margin-bottom: 9px;
`;
const Description = styled.p`
  font-size: 1.3rem;
  line-height: 18.79px;
  margin-bottom: 8px;
`;

const Details = styled.div`
  margin-top: 16px;
`;

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
            <FilteredCard>{capitalize(suggestion.category)}</FilteredCard>
            <Details>
              <FilteredCard>
                <Icon type={ICON_TYPE.arrow_up} />
                {suggestion.upvotes}
              </FilteredCard>
            </Details>
          </SuggestionItem>
        ))}
      </SuggestionsList>
    </Wrapper>
  );
}

export default FeedbackList;
