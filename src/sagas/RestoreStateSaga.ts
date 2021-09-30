import { put, takeEvery } from "redux-saga/effects";

import { RejectionActions } from "../store";
import { LocalStorageKey } from "../utils/contants";
import { getObj } from "../utils/LocalStorageUtils";

import type { IQuestion } from "../types/Rejection";
import type { SagaReturnType } from "redux-saga/effects";

export function* restoreStateSaga(): SagaReturnType<() => unknown> {
	yield takeEvery(RejectionActions.restoreState, restoreState);
}

function* restoreState() {
	const persistedQuestions = getObj<IQuestion[]>(LocalStorageKey.QUESTIONS);

	if (persistedQuestions) {
		yield put(RejectionActions.restoreQuestions(persistedQuestions));
	}
}
