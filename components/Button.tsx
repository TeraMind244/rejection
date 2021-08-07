import { memo } from "react";

import { getStyleObj, getStyleStr } from "../utils";

import type { PropsWithChildren, MouseEvent } from "react";
import type { Variant } from "../types/Rejection";

interface IOwnProps {
	variant: Variant;
	style?: object;

	onClick: (ev: MouseEvent<HTMLButtonElement>) => void;
}

type IProps = PropsWithChildren<IOwnProps>;

const Button = memo<IProps>(({ variant, style, onClick, children }) => {
	const buttonStyle = { ...style, ...getStyleObj(variant) };

	return (
		<>
			<button onClick={onClick}>{children}</button>
			<style jsx>{`
				button {
					min-width: 30%;
					color: #333;
					font-weight: bold;
					outline: none;
					${getStyleStr(buttonStyle)}
				}
			`}</style>
		</>
	);
});
Button.displayName = "Button";

export default Button;
