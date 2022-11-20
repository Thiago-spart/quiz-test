import Head from "next/head";

import { SITE } from "configs/site";

import type { HeadTitleProps } from "./types";

export const HeadTitle: React.FC<HeadTitleProps> = ({ title }) => (
	<Head>
		<title>
			{title} | {SITE.name}
		</title>
	</Head>
);
