import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";

import Form from "../components/Form";
import Points from "../components/Points";
import Questions from "../components/Questions";

const HomePage: NextPage = () => {
	return (
		<div>
			<h2>Rejection</h2>
			<Form />
			<Points />
			<Questions />

			<style jsx>{`
				h2 {
					color: red;
					text-transform: uppercase;
				}
				div {
					background-color: #dddddd;
					margin: 20px 50px;
					border-radius: 10px;
					border: 1px solid black;
					padding: 50px;
					align-content: center;
					text-align: center;
				}
			`}</style>

			<style jsx global>{`
				body {
					background-color: #cccccc;
					color: #333;
					margin: 0;
					padding: 8px;
					box-sizing: border-box;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
						Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
						sans-serif;
				}
				input,
				button,
				select,
				textarea {
					font-family: inherit;
					font-size: inherit;
					padding: 0.4em;
					margin: 0 0 0.5em 0;
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	};
};

export default HomePage;
