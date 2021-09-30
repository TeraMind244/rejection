import { Form, Points, AuthenticationHeader, Questions } from "components";

import type { GetServerSideProps, NextPage } from "next";

const HomePage: NextPage = () => {
	return (
		<div className='main'>
			<AuthenticationHeader />
			<h2>Rejection</h2>
			<Form />
			<Points />
			<Questions />

			<style jsx>{`
				h2 {
					color: red;
					text-transform: uppercase;
				}
				div.main {
					background-color: #dddddd;
					margin: 20px 50px;
					border-radius: 10px;
					border: 1px solid black;
					padding: 50px;
					align-content: center;
					text-align: center;
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
