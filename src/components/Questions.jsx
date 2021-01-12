import { connect } from "react-redux";
import { datetimeFormatter } from "../utils";
import Selectors from "../store/selectors";
import Actions from "../store/actions";

const generateTable = (questions, removeQuestion) =>
	questions.map(({ id, askee, question, timestamp, status }, index) => (
		<tr key={id}>
			<td>
				<b>{index + 1}</b>
			</td>
			<td>{askee}</td>
			<td>{question}</td>
			<td>{datetimeFormatter(new Date(timestamp))}</td>
			<td>{status}</td>
			<td>
				<button onClick={() => removeQuestion(id)}>Remove</button>
			</td>
		</tr>
	));

const Questions = ({ questions, removeQuestion }) => {
	return questions.length ? (
		<div id="data-table">
			<table>
				<thead>
					<tr>
						<th>&#35;</th>
						<th>Askee</th>
						<th>Question</th>
						<th>Timestampt</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{generateTable(questions, removeQuestion)}</tbody>
			</table>
		</div>
	) : (
		<div>No data!</div>
	);
};

const mapStateToProps = (state) => {
	return {
		questions: Selectors.questions(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeQuestion: (id) => dispatch(Actions.removeQuestion(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
