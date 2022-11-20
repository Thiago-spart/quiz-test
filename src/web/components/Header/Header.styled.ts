import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 2rem;
`;

export const BackButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	transition: 0.2s;
	padding: 1rem;
	border-radius: 0.8rem;
	cursor: pointer;

	&:hover {
		filter: brightness(0.8);
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}

	& > svg {
		font-size: 2.8rem;
		font-weight: 700;
	}
`;
