import ky from "ky";
import { envUrls } from "../env";

const kyClient = ky.create({
	prefixUrl: envUrls.NEXT_PUBLIC_API_URL,

	// mode: "cors",
	// cache: "no-store",
	retry: 1,
});

export default kyClient;
