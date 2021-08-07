import { createSelector } from "reselect";

import { QuestionStatus } from "../types/Rejection";

import type { IStateProps } from "./RejectionReducers";

export namespace RejectionSelectors {
	export const questions = (state: IStateProps) => state.questions;

	export const points = createSelector(questions, (questions) =>
		questions.reduce((acc, { status }) => {
			switch (status) {
				case QuestionStatus.ACCEPTED:
					return acc + 1;
				case QuestionStatus.REJECTED:
					return acc + 10;
				default:
					return acc;
			}
		}, 0)
	);
}
