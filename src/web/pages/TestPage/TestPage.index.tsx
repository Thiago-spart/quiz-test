/* eslint-disable react/no-array-index-key */
import { useRouter } from "next/router";

import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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
	const router = useRouter();

	const handleFinishTest = () => {
		router.push({
			pathname: "/quiz/final-result",
			query: { data: JSON.stringify({ selectedAnswers, data: data.id }) },
		});
	};

	const handleSelectQuestion = (questionIdx: number) => {
		setActiveQuestion(questionIdx);
	};

	const handleSignAnswer = (newAnswer: string, questionIdx: number) => {
		const tempArr = [...selectedAnswers];
		tempArr[questionIdx] = newAnswer;

		setSelectedAnswers(tempArr);
	};

	const handleNextQuestion = () => {
		setActiveQuestion(activeQuestion + 1);
	};

	const handlePreviousQuestion = () => {
		setActiveQuestion(activeQuestion - 1);
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

				<S.ControlPainel>
					<button
						type="button"
						onClick={handlePreviousQuestion}
						disabled={activeQuestion === 0}
					>
						<AiOutlineArrowLeft />
					</button>
					<S.FinishButton
						type="button"
						isAllQuestionsSign={!selectedAnswers.includes("")}
						onClick={handleFinishTest}
					>
						Finalizar
					</S.FinishButton>
					<button
						type="button"
						onClick={handleNextQuestion}
						disabled={activeQuestion === data.questions.length - 1}
					>
						<AiOutlineArrowRight />
					</button>
				</S.ControlPainel>
			</S.Container>
		</>
	);
};
