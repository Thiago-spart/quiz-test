import type { AppProps } from "next/app";

import { GlobalStyle } from "./App.styled";

export const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Component {...pageProps} />
			<GlobalStyle />
		</>
	);
};
