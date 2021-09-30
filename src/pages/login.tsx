import { useCallback, useState } from "react";
import Router from "next/router";
import { magicClient } from "utils/magic";

import type { ChangeEventHandler } from "react";
import type { NextPage } from "next";

const Login: NextPage = () => {
	const [email, setEmail] = useState("");
	const [isLoggingIn, setIsLoggingIn] = useState(false);

	/**
	 * Perform login action via Magic's passwordless flow. Upon successuful
	 * completion of the login flow, a user is redirected to the homepage.
	 */
	const login = useCallback(async () => {
		setIsLoggingIn(true);

		try {
			// Grab auth token from loginWithMagicLink
			const didToken = await magicClient.auth.loginWithMagicLink({
				email,
				redirectURI: new URL("/", window.location.origin).href,
			});

			// Validate auth token with server
			const res = await fetch("/api/login", {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${didToken}`,
				},
			});
			res.status === 200 && Router.push("/");
		} catch {
			setIsLoggingIn(false);
		}
	}, [email]);

	/**
	 * Saves the value of our email input into component state.
	 */
	const handleInputOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
		setEmail(event.target.value);
	}, []);

	return (
		<div className='main'>
			<h1>Please sign up or login</h1>
			<input
				type='email'
				name='email'
				required
				placeholder='Enter your email'
				onChange={handleInputOnChange}
				disabled={isLoggingIn}
			/>
			<button onClick={login} disabled={isLoggingIn}>
				Send
			</button>

			<style jsx>{`
				div.main {
					background-color: #dddddd;
					margin: 20px 50px;
					border-radius: 10px;
					border: 1px solid black;
					padding: 50px;
					align-content: center;
					text-align: center;
				}
				input {
					margin-right: 16px;
				}
			`}</style>
		</div>
	);
};

export default Login;
