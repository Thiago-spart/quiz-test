import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	cursor: pointer;

	flex-direction: column;
	border-radius: 0.75rem;

	width: 100%;
	min-height: 15rem;

	transition: 0.2s;

	img {
		width: 100%;
		height: 8rem;
		object-fit: cover;
		border-radius: 0.75rem 0.75rem 0 0;
	}

	&:hover,
	&:focus-visible,
	&:focus {
		outline: none;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
`;

export const TitleContainer = styled.div`
	padding: 1.2rem 1rem;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: flex-start;
	gap: 1rem;

	width: 100%;

	p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}
`;
