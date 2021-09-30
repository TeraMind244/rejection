import { Magic as MagicClient } from "magic-sdk";
import { Magic as MagicAdmin } from "@magic-sdk/admin";

const createMagic = key => typeof window != "undefined" && new MagicClient(key);

export const magicClient = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);

export const magicAdmin = new MagicAdmin(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
