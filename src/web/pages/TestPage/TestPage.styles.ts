import styled from "styled-components";

import { fonts } from "styles/fonts";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 2rem;
	gap: clamp(2rem, 1vw, 4rem);
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
