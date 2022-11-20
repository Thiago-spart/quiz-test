import type { FC } from "react";

import { SITE } from "configs/site";

export const HeadContent: FC = () => (
	<>
		<meta
			name="keywords"
			content="weather climate forecast temperature github search"
		/>
		<meta name="robots" content="index,follow" />
		<meta
			name="description"
			content="Dreamred is a forecast platform built to follow your city's forecast."
		/>
		<meta
			name="og:description"
			content="Dreamred is a forecast platform built to follow your city's forecast."
		/>
		<meta
			name="og:image"
			content="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		/>
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Dreamred" />
		<meta
			name="twitter:description"
			content="Dreamred is a forecast platform built to follow your city's forecast."
		/>
		<meta
			name="twitter:image"
			content="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		/>
		<meta name="og:site_name" content={SITE.name} />
		<meta name="og:url" content={SITE.url} />
		<meta name="og:locale" content="en_US" />
		<link rel="cannonical" href={SITE.url} />
	</>
);
