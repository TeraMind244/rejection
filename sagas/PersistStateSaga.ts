import { select, takeEvery } from "redux-saga/effects";

import { RejectionActions, RejectionSelectors } from "../store";
import { LocalStorageKey } from "../utils/contants";
import { setObj } from "../utils/LocalStorageUtils";

import type { IQuestion } from "../types/Rejection";

export function* persistStateSaga() {
	yield takeEvery(RejectionActions.addQuestion, persistState);
	yield takeEvery(RejectionActions.removeQuestion, persistState);
}

function* persistState() {
	const questions: IQuestion[] = yield select(RejectionSelectors.questions);

	setObj(LocalStorageKey.QUESTIONS, questions);
}
