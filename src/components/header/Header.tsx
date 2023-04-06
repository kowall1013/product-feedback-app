//External
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Components
import Icon from "components/Icon";
import Drawer from "components/Drawer";
import { StyledLink } from "../StyledLink";
import { Card } from "../Card";
import Tag from "../Tag";
//Hooks
import { useMediaQuery } from "hooks/useMediaQuery";
import { useAppSelector } from "hooks/useAppSelector";
//Utils
import { ICON_TYPE, FONT_WEIGHT, COLORS, CONSTANT_VARIABLES, Z_INDEX, DEVICE, QUERIES } from "utils/constant";
//Types
import { Feedback } from "pages/suggestions/SugestionsSlice";
import Suggestion from "./components/Suggestion";

const HeaderStyled = styled.header`
	position: relative;
	z-index: ${Z_INDEX.header};
	height: ${CONSTANT_VARIABLES.headerHeight};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 24px;

	background-image: linear-gradient(
		70deg,
		hsl(201deg 85% 54%) 0%,
		hsl(216deg 86% 55%) 4%,
		hsl(230deg 87% 56%) 8%,
		hsl(245deg 89% 57%) 14%,
		hsl(259deg 90% 58%) 20%,
		hsl(274deg 91% 59%) 28%,
		hsl(289deg 88% 59%) 38%,
		hsl(303deg 85% 60%) 52%,
		hsl(317deg 82% 60%) 69%,
		hsl(332deg 80% 60%) 87%,
		hsl(346deg 77% 61%) 100%
	);
`;

const TitleWrapper = styled.div`
	h1 {
		font-size: 1.5rem;
		line-height: 21.68px;
		letter-spacing: -0.19px;
		font-weight: ${FONT_WEIGHT.fw_700};
		color: ${COLORS.white};
	}

	span {
		font-size: 1.3rem;
		line-height: 18.79px;
		font-weight: ${FONT_WEIGHT.fw_500};
		color: ${COLORS.white};
		opacity: 0.75;
	}

	@media ${QUERIES.tabletAndUp} {
	}
`;

const HamburgerWrapper = styled.div`
	cursor: pointer;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	flex: 1 1 0px;

	@media ${QUERIES.tabletAndUp} {
		flex-direction: row;
		margin-bottom: 4rem;
	}

	@media ${QUERIES.desktopAndUp} {
		flex-direction: column;
		max-width: 255px;
	}
`;

const TitleWrapperTablet = styled(Card)`
	display: flex;
	flex-direction: column;
	justify-content: end;
	background-image: linear-gradient(90deg, #28a7ed 15%, #a337f6 60%, #e84d70 100%);
	border-radius: 1rem;

	h1 {
		font-weight: ${FONT_WEIGHT.fw_700};
		font-size: 2rem;
		color: ${COLORS.white};
		letter-spacing: -0.25px;
	}

	span {
		font-size: 1.5rem;
		font-weight: ${FONT_WEIGHT.fw_500};
		color: ${COLORS.white};
		opacity: 0.75;
	}
`;

const TagsWrapper = styled(Card)`
	display: flex;
	justify-content: flex-start;
	gap: 0.8rem;
	flex-wrap: wrap;
`;

const RoadmapHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2.4rem;

	span {
		font-size: 1.8rem;
		font-weight: ${FONT_WEIGHT.fw_700};
		color: ${COLORS.darkLight};
	}
`;

const RoadmapList = styled.ul`
	display: flex;
	flex-direction: column;
`;

export interface GroupedSuggestions {
	status: string;
	suggestions: Feedback[];
}

function Header(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const { isMatch: isTablet, mediaLoaded } = useMediaQuery(DEVICE.M);

	const suggestions: GroupedSuggestions[] = useAppSelector((state) =>
		Object.entries(
			state.feedbackList.productRequests.reduce((acc: Record<string, Feedback[]>, cur: Feedback) => {
				const { status } = cur;

				if (status !== "suggestion") {
					if (!acc[status]) {
						acc[status] = [];
					}
					acc[status].push(cur);
				}

				return acc;
			}, {})
		).map(([status, suggestions]) => ({ status, suggestions }))
	);

	return isTablet && mediaLoaded ? (
		<Nav>
			<TitleWrapperTablet>
				<h1>Frontend Mentor</h1>
				<span>Feedback Board</span>
			</TitleWrapperTablet>
			<TagsWrapper>
				<Tag>All</Tag>
				<Tag>UI</Tag>
				<Tag>UX</Tag>
				<Tag>Enhancment</Tag>
				<Tag>Bug</Tag>
				<Tag>Feature</Tag>
			</TagsWrapper>
			<Card>
				<RoadmapHeader>
					<span>Roadmap</span>
					<StyledLink to="roadmap-list">View</StyledLink>
				</RoadmapHeader>
				<RoadmapList>
					{suggestions.map((suggestion) => (
						<Suggestion suggestion={suggestion} />
					))}
				</RoadmapList>
			</Card>
		</Nav>
	) : (
		<>
			<HeaderStyled>
				<TitleWrapper>
					<h1>Frontend Mentor</h1>
					<span>Feedback Board</span>
				</TitleWrapper>
				<HamburgerWrapper onClick={() => setIsOpen(!isOpen)}>{isOpen ? <Icon type={ICON_TYPE.close} /> : <Icon type={ICON_TYPE.hamburger} />}</HamburgerWrapper>
			</HeaderStyled>
			<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<Nav>
					<TagsWrapper>
						<Tag>All</Tag>
						<Tag>UI</Tag>
						<Tag>UX</Tag>
						<Tag>Enhancment</Tag>
						<Tag>Bug</Tag>
						<Tag>Feature</Tag>
					</TagsWrapper>
					<Card>
						<RoadmapHeader>
							<span>Roadmap</span>
							<StyledLink to="roadmap-list">View</StyledLink>
						</RoadmapHeader>
						<RoadmapList>
							{suggestions.map((suggestion) => (
								<Suggestion suggestion={suggestion} />
							))}
						</RoadmapList>
					</Card>
				</Nav>
			</Drawer>
		</>
	);
}

export default Header;
