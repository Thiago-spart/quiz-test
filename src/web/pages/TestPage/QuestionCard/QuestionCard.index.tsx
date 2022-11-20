import React from "react";

import type { QuestionCardProps } from "./QuestionCard.types";

import * as S from "./QuestionCard.styles";

export const QuestionCard: React.FC<QuestionCardProps> = ({
	question,
	questionIdx,
	handleSelectAnswer,
}) => {
	const [selectedAnswer, setSelectedAnswer] = React.useState("");

	const handleSelectOption = (answer: string) => {
		setSelectedAnswer(answer);

		handleSelectAnswer(answer, questionIdx);
	};

	return (
		<S.Container>
			<S.StorylineText>{question.storyline}</S.StorylineText>

			<S.QuestionText>{question.question}</S.QuestionText>

			<S.AnswerListContainer>
				{question.options.map((option, idx) => (
					<li key={option} onClick={() => handleSelectOption(option)}>
						<S.AnswerContainer active={selectedAnswer === option}>
							<span>{idx + 1}</span>

							<p>{option}</p>
						</S.AnswerContainer>
					</li>
				))}
			</S.AnswerListContainer>
		</S.Container>
	);
};
