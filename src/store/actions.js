const actionFactory = (prefix) => (actionType) => {
	const type = `${prefix}/${actionType}`;
	const action = (payload) => ({
		type,
		payload,
	});
	action.type = type;

	return action;
};

const actionCreator = actionFactory("REJECTION");

const addQuestion = actionCreator("ADD_QUESTION");

const removeQuestion = actionCreator("REMOVE_QUESTION");

export default {
	addQuestion,
	removeQuestion,
};
