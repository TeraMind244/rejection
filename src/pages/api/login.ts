import { magicAdmin } from "utils/magic";

import type { NextApiHandler } from "next";

const login: NextApiHandler = async (req, res) => {
	try {
		const didToken = req.headers.authorization?.substr(7);
		magicAdmin.token.validate(didToken || "");

		res.status(200).json({ authenticated: true });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export default login;
