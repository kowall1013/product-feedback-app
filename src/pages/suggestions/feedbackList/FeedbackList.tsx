//External
import styled from "styled-components";
//Components
import Icon from "components/Icon";
import Tag from "components/Tag";
import { Paragraph } from "components/typography";
import { Card } from "components/Card";
//Hooks
import { useAppSelector } from "hooks/useAppSelector";
//Helpers / Constat
import { capitalize } from "helpers/strings.helper";
import { COLORS, FONT_WEIGHT, ICON_TYPE, QUERIES } from "utils/constant";

const Wrapper = styled.div`
	padding: 32px 24px 55px 24px;
	display: flex;
	justify-content: center;

	@media ${QUERIES.tabletAndUp} {
		padding: 0;
	}
`;
const List = styled.ul`
	display: flex;
	flex: 1 1 0px;
	flex-direction: column;
	row-gap: 16px;
	max-width: 327px;

	@media ${QUERIES.tabletAndUp} {
		max-width: none;
	}
`;
const ListItem = styled.li`
	display: grid;
	align-items: center;
	gap: 1.6rem;
	grid-template-areas:
		"content content"
		"likes comments";

	@media ${QUERIES.tabletAndUp} {
		grid-template-columns: auto 1fr auto;
		grid-template-areas: "likes content comments";
		gap: 4rem;
	}
`;

const ContentWrapper = styled.div`
	grid-area: content;
	margin-bottom: 1.6rem;

	h2 {
		font-size: 1.3rem;
		font-weight: ${FONT_WEIGHT.fw_700};
		color: ${COLORS.darkLight};
		margin-bottom: 0.8rem;

		@media ${QUERIES.tabletAndUp} {
			font-size: 1.8rem;
		}
	}
`;

const StyledTag = styled(Tag)`
	grid-area: likes;
	justify-self: flex-start;
	transform: translateY(-50%);

	div {
		display: flex;
		align-items: center;
		gap: 0.8rem;

		@media ${QUERIES.tabletAndUp} {
			flex-direction: column;
		}
	}
`;

const CommentsWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: 4px;
	grid-area: comments;
	justify-self: flex-end;

	span {
		color: ${COLORS.darkLight};
		font-weight: ${FONT_WEIGHT.fw_700};
		font-size: 1.3rem;

		@media ${QUERIES.tabletAndUp} {
			font-size: 1.6rem;
		}
	}
`;

function FeedbackList(): JSX.Element {
	const suggestions = useAppSelector((state) => state.feedbackList.productRequests.filter((suggestion) => suggestion.status === "suggestion"));

	return (
		<Wrapper>
			<List>
				{suggestions.map((suggestion) => (
					<Card key={suggestion.id}>
						<ListItem key={suggestion.id}>
							<ContentWrapper>
								<h2>{suggestion.title}</h2>
								<Paragraph>{suggestion.description}</Paragraph>
								<Tag>{capitalize(suggestion.category)}</Tag>
							</ContentWrapper>

							<StyledTag>
								<div>
									<Icon type={ICON_TYPE.upvotes} />
									<span>{suggestion.upvotes}</span>
								</div>
							</StyledTag>

							<CommentsWrapper>
								<Icon type={ICON_TYPE.comments} />
								<span>{suggestion.comments?.length ? suggestion.comments?.length : 0}</span>
							</CommentsWrapper>
						</ListItem>
					</Card>
				))}
			</List>
		</Wrapper>
	);
}

export default FeedbackList;
