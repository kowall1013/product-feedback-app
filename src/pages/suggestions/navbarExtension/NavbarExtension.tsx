//External
import styled from "styled-components";
//Components
import Button from "components/Button";
import DropdownMenu from "components/DropdownMenu";
import Icon from "components/Icon";
//Hooks
import { useMediaQuery } from "hooks/useMediaQuery";
import { useAppSelector } from "hooks/useAppSelector";
//Utils
import { COLORS, DEVICE, ICON_TYPE, QUERIES } from "utils/constant";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 56px;
	background-color: ${COLORS.dark};
	padding: 0 24px;

	@media ${QUERIES.tabletAndUp} {
		justify-content: flex-start;
		border-radius: 1rem;
		margin-bottom: 2.4rem;
	}
`;

const StyledButton = styled(Button)`
	margin-left: auto;
`;

const ContentButton = styled.span`
	display: flex;
	align-items: center;
	gap: 4px;
`;

const Info = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	span {
		font-size: 1.8rem;
		color: ${COLORS.white};
	}

	@media ${QUERIES.tabletAndUp} {
		margin-right: 3.8rem;
	}
`;

export const MOST_UPVOTES = "Most Upvotes";
export const LEAST_UPVOTES = "Least Upvotes";
export const MOST_COMMENTS = "Most Comments";
export const LEAST_COMMENTS = "Least Comments";

const dropdownList = [
	{ id: 0, name: MOST_UPVOTES },
	{ id: 1, name: LEAST_UPVOTES },
	{ id: 2, name: MOST_COMMENTS },
	{ id: 3, name: LEAST_COMMENTS },
];

function NavbarExtension(): JSX.Element {
	const { isMatch: isTablet, mediaLoaded } = useMediaQuery(DEVICE.M);
	const suggestionsLength = useAppSelector((state) => state.feedbackList.productRequests).filter((suggestion) => suggestion.status === "suggestion").length;

	return (
		<Wrapper>
			{isTablet && mediaLoaded ? (
				<Info>
					<Icon type={ICON_TYPE.bulb} />
					<span>{suggestionsLength} Suggestions</span>
				</Info>
			) : null}
			<DropdownMenu list={dropdownList} />
			<StyledButton>
				<ContentButton>
					<Icon type={ICON_TYPE.plus} />
					Add Feedback
				</ContentButton>
			</StyledButton>
		</Wrapper>
	);
}

export default NavbarExtension;
