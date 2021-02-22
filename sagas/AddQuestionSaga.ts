import { select, takeEvery } from "redux-saga/effects";

import { RejectionActions } from "../store/RejectionActions";
import { RejectionSelectors } from "../store/RejectionSelectors";
import { IQuestion } from "../types/Rejection";
import { LocalStorageKey } from "../utils/contants";
import { setObj } from "../utils/LocalStorageUtils";

export function* addQuestionSaga() {
	yield takeEvery(RejectionActions.addQuestion, addQuestion);
}

function* addQuestion() {
	const questions: IQuestion[] = yield select(RejectionSelectors.questions);
	setObj(LocalStorageKey.QUESTIONS, questions);
}
