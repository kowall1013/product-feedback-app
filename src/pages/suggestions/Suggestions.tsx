import Header from "components/header/Header";
import styled from "styled-components";
import { QUERIES } from "utils/constant";
import FeedbackList from "./feedbackList";
import NavbarExtension from "./navbarExtension";

const Wrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	@media ${QUERIES.tabletAndUp} {
		padding: 5.6rem 0rem 12rem 0rem;
		max-width: 689px;
	}

	@media ${QUERIES.desktopAndUp} {
		display: flex;
		justify-content: center;
		max-width: 1110px;
		gap: 30px;
	}
`;

const ContentWrapper = styled.div`
	@media ${QUERIES.desktopAndUp} {
		display: flex;
		flex-direction: column;
		flex: 1 1 0px;
	}
`;

function Suggestions(): JSX.Element {
	return (
		<Wrapper>
			<Header />
			<ContentWrapper>
				<NavbarExtension />
				<FeedbackList />
			</ContentWrapper>
		</Wrapper>
	);
}

export default Suggestions;
