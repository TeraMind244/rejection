import { all, fork } from "redux-saga/effects";

import { persistStateSaga } from "./PersistStateSaga";
import { restoreStateSaga } from "./RestoreStateSaga";

function* rootSaga() {
	yield all([fork(persistStateSaga), fork(restoreStateSaga)]);
}

export default rootSaga;
