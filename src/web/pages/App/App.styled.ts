import { createGlobalStyle } from "styled-components";

import { colors } from "styles/colors";
import { fonts, fontFamily } from "styles/fonts";

export const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	* {
    margin: 0;
    padding: 0;
  }

	html, body {
		min-height: 100%;
	}

  html {
    font-size: 62.5%;
		scroll-behavior: smooth;
  }

  body {
		-webkit-font-smoothing: antialiased;
		background: linear-gradient(var(--background-top-color), var(--background-bottom-color));
    color: var(--text-color);
    ${fontFamily}
		${fonts.text4}
  }

	a {
		color: var(--text-color);
		text-decoration: none;
	}

	button, input, textarea {
		background: transparent;
    color: var(--text-color);
		${fonts.text4}
		border: transparent;
	}

	ul {
		list-style: none;
	}

	::-webkit-scrollbar {
		width: 1rem;
		height: 1rem;
	}

	::-webkit-scrollbar-thumb {
		/* background: var(--scrollbar); */
		border-radius: 5px;
	}

	::-webkit-scrollbar-track {
		/* background: var(--scrosllbar-background); */
		border-radius: 5px;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}

	:root {
		${colors}
	}

	#root, #__next {
		isolation: isolate;
	}

	@media (max-width: 768px) {
    html {
      font-size: 60%;
    }
  }

	@media (max-width: 425px) {
    html {
      font-size: 57.5%;
    }
  }

	@media (max-width: 375px) {
    html {
      font-size: 55%;
    }
  }

	@media (max-width: 320px) {
    html {
      font-size: 52.5%;
    }
  }

	@media (max-width: 280px) {
    html {
      font-size: 50%;
    }
  }
`;
