import type { NextPage } from "next";
import Head from "next/head";

import { HomePage as Page } from "web/pages/HomePage/HomePage.index";

import { SITE } from "../configs/site";

const HomePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>{`Search | ${SITE.name}`}</title>
			</Head>
			<Page />
		</>
	);
};

export default HomePage;
