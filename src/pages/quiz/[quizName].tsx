import type { GetServerSideProps, NextPage } from "next";

import { TestPage } from "web/pages/TestPage/TestPage.index";

import type { TestProps } from "types/interfaces/testData";

interface PageProps {
	data: TestProps;
}

const Page: NextPage<PageProps> = ({ data }) => <TestPage data={data} />;

export const getServerSideProps: GetServerSideProps = async ctx => {
	const testData = JSON.parse(ctx?.query.data);

	return {
		props: {
			data: testData,
		},
	};
};

export default Page;
