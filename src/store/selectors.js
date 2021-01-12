import { createSelector } from "reselect";

const questions = (state) => state.questions;

const points = createSelector(questions, (questions) =>
	questions.reduce((acc, { status }) => {
		switch (status) {
			case "Accepted":
				return acc + 1;
			case "Rejected":
				return acc + 10;
			default:
				return acc;
		}
	}, 0)
);

export default {
	questions,
	points,
};
