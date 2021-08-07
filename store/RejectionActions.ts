import { actionCreatorFactory } from "typescript-fsa";

import type { IQuestion } from "../types/Rejection";

const actionCreator = actionCreatorFactory("REJECTION");

export namespace RejectionActions {
	export const addQuestion = actionCreator<IQuestion>("ADD_QUESTION");

	export const removeQuestion = actionCreator<string>("REMOVE_QUESTION");

	export const persistState = actionCreator<void>("PERSIST_STATE");

	export const restoreState = actionCreator<void>("RESTORE_STATE");

	export const restoreQuestions = actionCreator<IQuestion[]>("RESTORE_QUESTIONS");
}
