import type { QuestionsProps } from "types/interfaces/testData";

export interface QuestionCardProps {
	question: QuestionsProps;
	questionIdx: number;
	handleSelectAnswer: (answer: string, idx: number) => void;
}

export type SelectedAnswerProps = number | null;
