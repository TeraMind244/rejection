import { actionCreatorFactory } from "typescript-fsa";

import type { IQuestion } from "../types/Rejection";

const actionCreator = actionCreatorFactory("REJECTION");

const addQuestion = actionCreator<IQuestion>("ADD_QUESTION");

const removeQuestion = actionCreator<string>("REMOVE_QUESTION");

const persistState = actionCreator<void>("PERSIST_STATE");

const restoreState = actionCreator<void>("RESTORE_STATE");

const restoreQuestions = actionCreator<IQuestion[]>("RESTORE_QUESTIONS");

export default {
	addQuestion,
	removeQuestion,
	persistState,
	restoreState,
	restoreQuestions,
};
