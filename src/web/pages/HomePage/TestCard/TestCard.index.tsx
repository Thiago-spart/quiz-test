import { useRouter } from "next/router";

import type { TestCardTypes } from "./TestCard.types";

import * as S from "./TestCard.styles";

export const TestCard: React.FC<TestCardTypes> = ({
	bannerImgUrl,
	subtitle,
	title,
	testLink,
	testData,
}) => {
	const router = useRouter();

	const handleRedirectToTestPage = () => {
		router.push({
			pathname: testLink,
			query: JSON.stringify(testData),
		});
	};

	return (
		<S.Container onClick={handleRedirectToTestPage}>
			<img src={bannerImgUrl} alt={title} />

			<S.TitleContainer>
				<h4>{title}</h4>
				<p>{subtitle}</p>
			</S.TitleContainer>
		</S.Container>
	);
};
