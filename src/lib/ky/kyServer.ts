import ky from "ky";
import { envUrls } from "../env";

const kyServer = ky.create({
	prefixUrl: envUrls.NEXT_PUBLIC_API_URL,
	credentials: "include",
	cache: "no-store",
	mode: "cors",
	retry: 2,
});

export default kyServer;
