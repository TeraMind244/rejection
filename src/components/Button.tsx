import { memo } from "react";

import { getStyleObj, getStyleStr } from "utils";
import { Variant } from "types/Rejection";

import type { PropsWithChildren, MouseEvent } from "react";

interface IOwnProps {
	variant?: Variant;
	style?: Record<string, unknown>;

	onClick: (ev: MouseEvent<HTMLButtonElement>) => void;
}

type IProps = PropsWithChildren<IOwnProps>;

export const Button = memo<IProps>(({ variant = Variant.NORMAL, style, onClick, children }) => {
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
