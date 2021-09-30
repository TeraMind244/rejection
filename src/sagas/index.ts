import { all, fork } from "redux-saga/effects";

import { persistStateSaga } from "./PersistStateSaga";
import { restoreStateSaga } from "./RestoreStateSaga";

import type { SagaIterator } from "redux-saga";

function* rootSaga(): SagaIterator {
	yield all([fork(persistStateSaga), fork(restoreStateSaga)]);
}

export default rootSaga;
