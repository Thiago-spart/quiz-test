/* eslint-disable @typescript-eslint/naming-convention */
export interface QuestionsProps {
	storyline: string;
	question: string;
	options: Array<string>;
	answers: Array<string>;
}

export interface TestProps {
	id: string;
	name: string;
	description: string;
	banner_image: string;
	meta_link: string;
	questions: Array<QuestionsProps>;
}

export interface TestDataProps {
	tests: Array<TestProps>;
}
