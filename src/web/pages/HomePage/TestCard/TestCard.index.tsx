import Link from "next/link";

import type { TestCardTypes } from "./TestCard.types";

import * as S from "./TestCard.styles";

export const TestCard: React.FC<TestCardTypes> = ({
	bannerImgUrl,
	subtitle,
	title,
	testLink,
}) => {
	return (
		<Link href={testLink}>
			<S.Container>
				<img src={bannerImgUrl} alt={title} />

				<S.TitleContainer>
					<h4>{title}</h4>
					<p>{subtitle}</p>
				</S.TitleContainer>
			</S.Container>
		</Link>
	);
};
