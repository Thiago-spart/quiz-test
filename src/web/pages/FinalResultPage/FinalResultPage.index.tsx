import type { FinalResultPageProps } from "./FinalResultPage.types";

import * as S from "./FinalResultPage.styles";

export const FinalResultPage: React.FC<FinalResultPageProps> = ({ data }) => {
	console.log(data);

	return (
		<S.Container>
			<p>oi</p>
		</S.Container>
	);
};
