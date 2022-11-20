import { HeadTitle } from "web/components/HeadTitle";

import * as S from "./TestPage.styles";

export const TestPage: React.FC = () => {
	return (
		<>
			<HeadTitle title="Test" />

			<S.Container>
				<p>oi</p>
			</S.Container>
		</>
	);
};
