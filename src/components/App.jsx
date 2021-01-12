import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../store/reducers";
import Form from "./Form";
import Points from "./Points";
import Questions from "./Questions";

const App = () => {
	const store = createStore(reducer);

	return (
		<Provider store={store}>
			<Form />
			<Points />
			<Questions />
		</Provider>
	);
};

export default App;
