import { all, fork } from "redux-saga/effects";

import { addQuestionSaga } from "./AddQuestionSaga";

function* rootSaga() {
	yield all([fork(addQuestionSaga)]);
}

export default rootSaga;
