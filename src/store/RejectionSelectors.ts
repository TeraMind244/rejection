import { createSelector } from "reselect";

import { IQuestion, QuestionStatus } from "../types/Rejection";

import type { Selector } from "react-redux";
import type { IStateProps } from "./RejectionReducers";

export const questions: Selector<IStateProps, IQuestion[]> = state => state.questions;

export const points = createSelector(questions, questions =>
	questions.reduce((acc, { status }) => {
		switch (status) {
			case QuestionStatus.ACCEPTED:
				return acc + 1;
			case QuestionStatus.REJECTED:
				return acc + 10;
			default:
				return acc;
		}
	}, 0),
);

export default {
	questions,
	points,
};
