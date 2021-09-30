import { memo } from "react";
import { connect, MapStateToProps } from "react-redux";

import { RejectionSelectors } from "store";

import type { IStateProps } from "store/RejectionReducers";

interface IOwnProps {
	points: number;
}

type IProps = IOwnProps;

const Points = memo<IProps>(({ points }) => {
	return (
		<h2>
			{`Point${points !== 1 ? "s" : ""}: `}
			<span>{points}</span>

			<style jsx>{`
				h2 {
					color: #009a00;
				}
			`}</style>
		</h2>
	);
});
Points.displayName = "Points";

const mapStateToProps: MapStateToProps<IOwnProps, unknown, IStateProps> = state => {
	return {
		points: RejectionSelectors.points(state),
	};
};

export default connect(mapStateToProps)(Points);
