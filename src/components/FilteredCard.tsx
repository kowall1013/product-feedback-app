import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "utils/constant";

const FilteredCardStyled = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: ${FONT_WEIGHT.fw_600};
  font-size: 1.3rem;
  color: ${COLORS.violet};
  background-color: ${COLORS.WhiteDarker};
`;

type FilteredCardProps = {
  children: React.ReactNode;
};

function FilteredCard({ children }: FilteredCardProps): JSX.Element {
  return <FilteredCardStyled>{children}</FilteredCardStyled>;
}

export default FilteredCard;
