import kyClient from "@/lib/ky/kyClient";
import { PostUpdateSchemaType } from "@/lib/types";

const editPost = async (params: string, data: PostUpdateSchemaType) => {
	try {
		await kyClient.patch(`post/${params}`, {
			next: { tags: ["editPost"] },
			json: data,
		});

		return { success: true, message: "Post edited successfully!" };
	} catch (
		error: any // eslint-disable-line
	) {
		console.log(error.message);
		return {
			success: false,
			message:
				"Failed to delete post. Please try again later." +
				error.message,
		};
	}
};

export default editPost;
