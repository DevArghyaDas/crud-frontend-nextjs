import kyServer from "@/lib/ky/kyServer";
import { DefautResponseType, DisplayCardPropType } from "@/lib/types";

const getAllPost = async () => {
	try {
		const data = await kyServer
			.get("post/", {
				next: { tags: ["getAllPosts"] },
			})
			.json<DefautResponseType<DisplayCardPropType[]>>();

		return { data: data, success: true, message: "Fetch Successfull!" };
	} catch (
		error: any // eslint-disable-line
	) {
		// const httpError = error as HTTPError;
		// const errorJson = await httpError.response.json<any>(); // eslint-disable-line
		// console.log(errorJson.errors[0].message);

		console.log(error.message);

		return { data: null, success: false, message: error.message as string };
	}
};

export default getAllPost;
