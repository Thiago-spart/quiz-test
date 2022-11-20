import type { NavQuestionsProps } from "./NavQuestions.types";

import * as S from "./NavQuestions.styles";

export const NavQuestions: React.FC<NavQuestionsProps> = ({
	title,
	isActive,
	...rest
}) => {
	return (
		<li>
			<S.NavButton isActive={isActive} disabled={isActive} {...rest}>
				{title}
			</S.NavButton>
		</li>
	);
};
