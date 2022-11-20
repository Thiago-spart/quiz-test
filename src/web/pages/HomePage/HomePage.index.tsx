import { useQuery } from "@tanstack/react-query";
import React from "react";

import { testApi } from "services/api/testApi";

import type { TestProps } from "../../../types/interfaces/testData";

import * as S from "./HomePage.styled";
import { TestCard } from "./TestCard/TestCard.index";

export const HomePage: React.FC = () => {
	const fetchTests = (): Promise<Array<TestProps>> =>
		testApi.get("tests").then(response => response.data);

	const { data } = useQuery({
		queryKey: ["tests"],
		queryFn: fetchTests,
		staleTime: 300,
	});

	return (
		<S.Container>
			<S.TitleContainer>
				<h1>
					Quiz<span>App</span>
				</h1>

				<p>Selecione o test 😉 e comesse a praticar.</p>
			</S.TitleContainer>

			<S.QuizContainer>
				{data?.map(test => (
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
