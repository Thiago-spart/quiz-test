/* eslint-disable react/no-array-index-key */
import React from "react";

import { HeadTitle } from "web/components/HeadTitle";
import { NavQuestions } from "web/components/NavQuestions/NavQuestions.index";

import type { TestPageProps } from "./TestPage.types";

import * as S from "./TestPage.styles";

import { QuestionCard } from "./QuestionCard/QuestionCard.index";

export const TestPage: React.FC<TestPageProps> = ({ data }) => {
	const [activeQuestion, setActiveQuestion] = React.useState(0);
	const [selectedAnswers, setSelectedAnswers] = React.useState<Array<string>>(
		Array.from(Array(data.questions.length)).fill(""),
	);

	const handleSelectQuestion = (questionIdx: number) => {
		setActiveQuestion(questionIdx);
	};

	const handleSignAnswer = (newAnswer: string, questionIdx: number) => {
		const tempArr = [...selectedAnswers];
		tempArr[questionIdx] = newAnswer;

		setSelectedAnswers(tempArr);
	};

	return (
		<>
			<HeadTitle title={`${data.name} Test`} />

			<S.Container>
				<S.NavContainer>
					<ul>
						{data.questions.map((_, idx) => (
							<NavQuestions
								title={String(idx + 1)}
								key={idx}
								isActive={idx === activeQuestion}
								onClick={() => handleSelectQuestion(idx)}
							/>
						))}
					</ul>
				</S.NavContainer>

				<QuestionCard
					questionIdx={activeQuestion}
					handleSelectAnswer={handleSignAnswer}
					question={data.questions[activeQuestion]}
				/>
			</S.Container>
		</>
	);
};
