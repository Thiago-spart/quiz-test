import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { testApi } from "services/api/testApi";

import { HomePage as Page } from "web/pages/HomePage/HomePage.index";

import { SITE } from "../../configs/site";

import type { TestDataProps } from "types/interfaces/testData";

interface HomePageProps {
	data: TestDataProps;
}

const HomePage: NextPage<HomePageProps> = ({ data }) => {
	return (
		<>
			<Head>
				<title>{`Search | ${SITE.name}`}</title>
			</Head>
			<Page data={data} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const testRes = await testApi.get("tests");

	const TestData = testRes.data;

	return {
		props: {
			data: {
				tests: TestData,
			},
		},
	};
};

export default HomePage;
