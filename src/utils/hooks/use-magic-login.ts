import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { magicClient } from "utils/magic";

import type { MagicUserMetadata } from "@magic-sdk/types";

type UseMagicLoginnType = () => {
	userMetadata: MagicUserMetadata | null;
};

export const useMagicLogin: UseMagicLoginnType = () => {
	const [userMetadata, setUserMetadata] = useState<MagicUserMetadata>(null);
	const router = useRouter();
	const { user } = magicClient;

	useEffect(() => {
		// On mount, we check if a user is logged in.
		// If so, we'll retrieve the authenticated user's profile.
		user.isLoggedIn().then(magicIsLoggedIn => {
			if (magicIsLoggedIn) {
				magicClient.user.getMetadata().then(setUserMetadata);
			} else {
				// If no user is logged in, redirect to `/login`
				router.push("/login");
			}
		});
	}, [router, user]);

	return {
		userMetadata,
	};
};
