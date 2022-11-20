import type { ButtonHTMLAttributes } from "react";

export interface NavQuestionsProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	isActive: boolean;
}
