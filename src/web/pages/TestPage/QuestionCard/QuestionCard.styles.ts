import styled from "styled-components";

import { fonts } from "styles/fonts";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
`;

export const StorylineText = styled.p`
	${fonts.text4}
`;

export const QuestionText = styled.p`
	${fonts.text3}
	font-weight: 700;
`;

export const AnswerListContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0.5rem;
	width: 100%;

	li {
		width: 100%;
	}
`;

export const AnswerContainer = styled.div<{ active: boolean }>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1.5rem;

	width: 100%;
	cursor: ${({ active }) => (active ? "default" : "pointer")};

	transition: 0.2s;

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
		width: 4rem;
		border: 1px solid var(--purple-800);
		color: var(--purple-800);
		border-radius: 0.25rem;

		color: ${({ active }) => (active ? "var(--white)" : "var(--purple-900)")};
		background-color: ${({ active }) =>
			active ? "var(--purple-900)" : "var(--purple-50)"};
	}

	p {
		${fonts.text3}
	}

	&:not(:disabled):hover {
		filter: brightness(0.8);
	}
`;
