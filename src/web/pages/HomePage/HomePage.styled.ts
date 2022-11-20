import styled from "styled-components";

import { fonts } from "styles/fonts";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 2rem;
	gap: 1rem;
`;

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;
	gap: 1rem;

	h1 {
		font-size: 4.2rem;
		line-height: 5.2rem;
		letter-spacing: 0.25rem;
		font-weight: 300;

		span {
			color: var(--purple-700);
		}
	}

	p {
		${fonts.text4}
	}
`;

export const QuizContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1rem;

	margin-top: 4rem;
`;
