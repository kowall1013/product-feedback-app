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
  display: flex;
  justify-content: space-between;
`;

const FilteredCardContent = styled.span`
  display: flex;
  align-items: center;
  column-gap: 10px;

  span {
    color: ${COLORS.darkLight};
    font-weight: ${FONT_WEIGHT.fw_700};
    font-size: 1.3rem;
  }
`;

const CommentsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;

  span {
    color: ${COLORS.darkLight};
    font-weight: ${FONT_WEIGHT.fw_700};
    font-size: 1.3rem;
  }
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
                <FilteredCardContent>
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 6l4-4 4 4"
                      stroke="#4661E6"
                      stroke-width="2"
                      fill="none"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <span>{suggestion.upvotes}</span>
                </FilteredCardContent>
              </FilteredCard>
              {suggestion?.comments ? (
                <CommentsWrapper>
                  <svg
                    width="18"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                      fill="#CDD2EE"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <span>{suggestion.comments?.length}</span>
                </CommentsWrapper>
              ) : null}
            </Details>
          </SuggestionItem>
        ))}
      </SuggestionsList>
    </Wrapper>
  );
}

export default FeedbackList;
