import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 2rem;
	gap: clamp(2rem, 1vw, 4rem);

	& > div:last-child {
		margin-top: auto;
	}
`;
