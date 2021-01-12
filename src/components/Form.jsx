import { useState } from "react";
import { connect } from "react-redux";
import Actions from "../store/actions";
import { generateRandomId } from "../utils";

const Form = ({ askQuestion }) => {
	const [askee, setAskee] = useState("");
	const [question, setQuestion] = useState("");

	const handleAskeeChange = (ev) => {
		setAskee(ev.target.value);
	};

	const handleQuestionChange = (ev) => {
		setQuestion(ev.target.value);
	};

	const addQuestion = (status) => {
		if (question && askee) {
			const newQuestion = {
				id: generateRandomId(),
				timestamp: Date.now(),
				question,
				askee,
				status,
			};
			askQuestion(newQuestion);
		}
	};

	return (
		<div className="form">
			<div className="row">
				<label htmlFor="askee">Name</label>
				<input
					id="askee"
					placeholder="Askee"
					value={askee}
					onChange={handleAskeeChange}
				/>
			</div>
			<div className="row">
				<label htmlFor="question">Question</label>
				<input
					id="question"
					placeholder="Question"
					value={question}
					onChange={handleQuestionChange}
				/>
			</div>
			<div className="row">
				<button
					className="button button-handler"
					onClick={() => addQuestion("Accepted")}
				>
					Accepted
				</button>
				<button
					className="button button-handler"
					onClick={() => addQuestion("Rejected")}
				>
					Rejected
				</button>
				<button
					className="button button-handler"
					onClick={() => addQuestion("Unanswered")}
				>
					Unanswered
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		askQuestion: (question) => dispatch(Actions.addQuestion(question)),
	};
};

export default connect(null, mapDispatchToProps)(Form);
