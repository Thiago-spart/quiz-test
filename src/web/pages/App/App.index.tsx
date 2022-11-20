import type { AppProps } from "next/app";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "services/queryClient";

import { GlobalStyle } from "./App.styled";

export const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
			<GlobalStyle />
		</>
	);
};
