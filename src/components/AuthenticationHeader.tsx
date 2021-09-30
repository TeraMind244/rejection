import { memo } from "react";

import { Button } from "./Button";
import { useMagicLogin } from "utils/hooks/use-magic-login";
import { useMagicLogout } from "utils/hooks/use-magic-logout";

const logoutButtonStyle = { ["min-width"]: "unset" };

export const AuthenticationHeader = memo(() => {
	const { userMetadata } = useMagicLogin();
	const { logout } = useMagicLogout();

	return (
		<div className='authentication'>
			<div className='welcome'>
				{userMetadata ? (
					<>
						Welcome: <span className='username'>{userMetadata.email}</span>
					</>
				) : (
					<div>Loading...</div>
				)}
			</div>
			<Button onClick={logout} style={logoutButtonStyle}>
				Logout
			</Button>

			<style jsx>{`
				div.authentication {
					text-align: right;
				}
				div.welcome {
					margin-bottom: 16px;
				}
				span.username {
					font-weight: bold;
				}
			`}</style>
		</div>
	);
});
AuthenticationHeader.displayName = "AuthenticationHeader";
