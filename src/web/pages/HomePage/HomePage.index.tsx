import React from "react";

import type { HomePageProps } from "./HomePage.types";

import * as S from "./HomePage.styled";
import { TestCard } from "./TestCard/TestCard.index";

export const HomePage: React.FC<HomePageProps> = ({ data }) => {
	return (
		<S.Container>
			<S.TitleContainer>
				<h1>
					Quiz<span>App</span>
				</h1>

				<p>Selecione o test 😉 e comesse a praticar.</p>
			</S.TitleContainer>

			<S.QuizContainer>
				{data.tests.map(test => (
					<TestCard
						title={test.name}
						subtitle={test.description}
						bannerImgUrl={test.banner_image}
						testLink="#"
						key={test.id}
					/>
				))}
			</S.QuizContainer>
		</S.Container>
	);
};
