import Actions from "./actions";

const INITIAL_STATE = {
	questions: [],
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Actions.addQuestion.type:
			return addQuestion(state, action);
		case Actions.removeQuestion.type:
			return removeQuestion(state, action);
		default:
			return state;
	}
};

function addQuestion(state, { payload: newQuestion }) {
	const { questions: oldQuestions } = state;
	const questions = [...oldQuestions, newQuestion];
	return {
		...state,
		questions,
	};
}

function removeQuestion(state, { payload: id }) {
	const { questions } = state;

	return {
		...state,
		questions: questions.filter((question) => question.id !== id),
	};
}

export default reducer;
