import { NextPage } from "next";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import Form from "../components/Form";
import Points from "../components/Points";
import Questions from "../components/Questions";
import RejectionReducer from "../store/RejectionReducers";
import sagas from "../sagas";
import { getObj } from "../utils/LocalStorageUtils";
import { LocalStorageKey } from "../utils/contants";
import { IQuestion } from "../types/Rejection";

const isServer = () => typeof window === "undefined";

const HomePage: NextPage = () => {
	const initialState = {
		questions: getObj<IQuestion[]>(LocalStorageKey.QUESTIONS),
	};

	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		RejectionReducer,
		initialState,
		applyMiddleware(sagaMiddleware)
	);
	sagaMiddleware.run(sagas);

	return (
		<Provider store={store}>
			<div>
				<h2>Rejection</h2>
				<Form />
				<Points />
				<Questions />
			</div>

			<style jsx>{`
				h2 {
					color: red;
					text-transform: uppercase;
				}
				div {
					background-color: #dddddd;
					margin: 20px 50px;
					border-radius: 10px;
					border: 1px solid black;
					padding: 50px;
					align-content: center;
					text-align: center;
				}
			`}</style>

			<style jsx global>{`
				body {
					background-color: #cccccc;
					color: #333;
					margin: 0;
					padding: 8px;
					box-sizing: border-box;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
						Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
						sans-serif;
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

export default HomePage;
