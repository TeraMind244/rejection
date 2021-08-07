import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { RejectionReducers } from "../store";
import { default as RejectionSaga } from "../sagas";

export default function App({ Component, pageProps }) {
	const sagaMiddleware = createSagaMiddleware();
	const composedEnhancers = composeWithDevTools(
		applyMiddleware(sagaMiddleware)
	);
	const store = createStore(RejectionReducers, composedEnhancers);

	sagaMiddleware.run(RejectionSaga);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
