import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 1rem;

		width: 100%;
	}
`;

export const NavButton = styled.button<{ isActive: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem 2rem;
	border: 1px solid var(--purple-900);
	border-radius: 0.25rem;
	color: ${({ isActive }) => (isActive ? "var(--white)" : "var(--purple-900)")};
	cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
	background-color: ${({ isActive }) =>
		isActive ? "var(--purple-900)" : "var(--purple-50)"};

	transition: 0.2s;

	&:not(:disabled):hover {
		filter: brightness(0.8);
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
`;
