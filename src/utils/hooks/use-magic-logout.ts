import { useRouter } from "next/router";
import { useCallback } from "react";

import { magicClient } from "utils/magic";

type UseMagicLogoutType = () => {
	logout: () => void;
};

export const useMagicLogout: UseMagicLogoutType = () => {
	const { user } = magicClient;
	const router = useRouter();

	const logout = useCallback(async () => {
		await user.logout();

		router.push("/login");
	}, [router, user]);

	return {
		logout,
	};
};
