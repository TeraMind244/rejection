import { useState, useCallback, memo } from "react";
import { connect } from "react-redux";

import { RejectionActions } from "store";
import { generateRandomId } from "utils";
import { QuestionStatus, Variant } from "types/Rejection";

import { Button } from "./Button";

import type { MapDispatchToProps } from "react-redux";
import type { ChangeEvent } from "react";
import type { IQuestion } from "types/Rejection";

interface IDispatchProps {
	askQuestion: (question: IQuestion) => void;
}

type IProps = IDispatchProps;

const Form = memo<IProps>(({ askQuestion }) => {
	const [askee, setAskee] = useState("");
	const [question, setQuestion] = useState("");

	const clearInputs = () => {
		setAskee("");
		setQuestion("");
	};

	const addQuestion = useCallback(
		(status: QuestionStatus): void => {
			if (question && askee) {
				const newQuestion = {
					id: generateRandomId(),
					timestamp: Date.now(),
					question,
					askee,
					status,
				};
				askQuestion(newQuestion);
				clearInputs();
			}
		},
		[question, askee, askQuestion],
	);

	const handleAskeeChange = useCallback((ev: ChangeEvent<HTMLInputElement>): void => {
		setAskee(ev.target.value);
	}, []);

	const handleQuestionChange = useCallback((ev: ChangeEvent<HTMLInputElement>): void => {
		setQuestion(ev.target.value);
	}, []);

	const handleAcceptQuestion = useCallback(() => {
		addQuestion(QuestionStatus.ACCEPTED);
	}, [addQuestion]);

	const handleRejectQuestion = useCallback(() => {
		addQuestion(QuestionStatus.REJECTED);
	}, [addQuestion]);

	const handleUnanswerredQuestion = useCallback(() => {
		addQuestion(QuestionStatus.UNANSWERED);
	}, [addQuestion]);

	return (
		<div className='form'>
			<div className='row'>
				<input placeholder='Askee' value={askee} onChange={handleAskeeChange} />
			</div>
			<div className='row'>
				<input placeholder='Question' value={question} onChange={handleQuestionChange} />
			</div>
			<div className='row'>
				<Button variant={Variant.PRIMARY} onClick={handleAcceptQuestion}>
					{QuestionStatus.ACCEPTED}
				</Button>
				<Button variant={Variant.DANGER} onClick={handleRejectQuestion}>
					{QuestionStatus.REJECTED}
				</Button>
				<Button variant={Variant.NORMAL} onClick={handleUnanswerredQuestion}>
					{QuestionStatus.UNANSWERED}
				</Button>
				<Button onClick={() => null} />
			</div>

			<style jsx>{`
				.row {
					display: inline-flex;
					flex-direction: row;
					justify-content: space-between;
					width: 100%;
				}
				input {
					width: 100%;
				}
			`}</style>
		</div>
	);
});
Form.displayName = "Form";

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, unknown> = dispatch => {
	return {
		askQuestion: (question: IQuestion) => dispatch(RejectionActions.addQuestion(question)),
	};
};

export default connect(null, mapDispatchToProps)(Form);
