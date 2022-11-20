import styled from "styled-components";

import { fonts } from "styles/fonts";

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

export const NavContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
		gap: 1rem;

		width: 100%;
	}
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

export const ControlPainel = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;

	align-self: flex-end;

	button {
		display: flex;
		justify-content: center;
		align-items: center;

		font-weight: 300;
		font-size: 1.6rem;
		line-height: 2rem;
		letter-spacing: 0.15rem;
		border-radius: 0.25rem;
		padding: 1.2rem 1rem;
		transition: 0.2s;
		width: 100%;
		border: 1px solid var(--purple-900);
		color: var(--purple-900);
		background-color: var(--purple-50);

		&:focus-visible,
		&:not(:disabled):hover {
			background: var(--purple-900);
			color: var(--white);
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		}
	}
`;

export const FinishButton = styled.button<{ isAllQuestionsSign: boolean }>`
	display: ${({ isAllQuestionsSign }) =>
		isAllQuestionsSign ? "flex" : "none"} !important;
`;
