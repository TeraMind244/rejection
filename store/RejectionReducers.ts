import { RejectionActions } from "./RejectionActions";

import type { Action } from "typescript-fsa";
import type { IQuestion } from "../types/Rejection";

export interface IStateProps {
	questions: IQuestion[];
}

interface IActionMap {
	[actionType: string]: (
		state: IStateProps,
		action?: Action<any>
	) => IStateProps;
}

const INITIAL_STATE: IStateProps = {
	questions: [],
};

const ACTION_MAP: IActionMap = {
	[RejectionActions.addQuestion.type]: addQuestion,
	[RejectionActions.removeQuestion.type]: removeQuestion,
	[RejectionActions.restoreQuestions.type]: restoreQuestions,
};

const reducer = (state = INITIAL_STATE, action: Action<any>): IStateProps => {
	return ACTION_MAP[action.type]?.(state, action) || state;
};

function addQuestion(
	state: IStateProps,
	{ payload: newQuestion }: Action<IQuestion>
): IStateProps {
	const { questions: oldQuestions } = state;
	const questions = [...oldQuestions, newQuestion];

	return {
		...state,
		questions,
	};
}

function removeQuestion(
	state: IStateProps,
	{ payload: id }: Action<string>
): IStateProps {
	const { questions } = state;

	return {
		...state,
		questions: questions.filter((question) => question.id !== id),
	};
}

function restoreQuestions(state: IStateProps, { payload: persistedQuestions }: Action<IQuestion[]>): IStateProps {
	return {
		...state,
		questions: persistedQuestions
	};
}

export default reducer;
