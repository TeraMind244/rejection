import { connect } from "react-redux";
import Selectors from "../store/selectors";

const Points = ({ points }) => {
	return <h2>{`Point${points !== 1 ? "s" : ""}: ${points}`}</h2>;
};

const mapStateToProps = (state) => {
	return {
		points: Selectors.points(state),
	};
};

export default connect(mapStateToProps)(Points);
