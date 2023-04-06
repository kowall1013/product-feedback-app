import { StyledLink } from "components/StyledLink";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export default function ErrorPage() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<Wrapper>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<i>{error.statusText}</i>
				<StyledLink to="/">Back to hompePage</StyledLink>
			</Wrapper>
		);
	}

	return <p>{"Unknown Error"}</p>;
}
