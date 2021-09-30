import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { RejectionReducers } from "store";
import { default as RejectionSaga } from "sagas";

import type { AppProps } from "next/app";
import type { ReactNode } from "react";

const App = ({ Component, pageProps }: AppProps): ReactNode => {
	const sagaMiddleware = createSagaMiddleware();
	const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
	const store = createStore(RejectionReducers, composedEnhancers);

	sagaMiddleware.run(RejectionSaga);

	return (
		<Provider store={store}>
			<Component {...pageProps} />

			<style jsx global>{`
				body {
					background-color: #cccccc;
					color: #333;
					margin: 0;
					padding: 8px;
					box-sizing: border-box;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
						"Helvetica Neue", sans-serif;
				}
				input,
				button,
				select,
				textarea {
					font-family: inherit;
					font-size: inherit;
					padding: 0.4em;
					margin: 0 0 0.5em 0;
					box-sizing: border-box;
				}
			`}</style>
		</Provider>
	);
};

export default App;
