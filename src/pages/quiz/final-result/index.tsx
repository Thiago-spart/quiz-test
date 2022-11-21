import type { GetServerSideProps, NextPage } from "next";

import { FinalResultPage } from "web/pages/FinalResultPage/FinalResultPage.index";

interface PageProps {
	data: {
		selectedAnswers: Array<string>;
		data: string;
	};
}

const Page: NextPage<PageProps> = ({ data }) => <FinalResultPage data={data} />;

export const getServerSideProps: GetServerSideProps = async ctx => {
	const queryData = JSON.parse(ctx?.query.data);

	return {
		props: {
			data: queryData,
		},
	};
};

export default Page;
