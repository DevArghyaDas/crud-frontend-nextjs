import kyClient from "@/lib/ky/kyClient";
import { PostSchemaType } from "@/lib/types";

const createOnePost = async (postData: PostSchemaType) => {
	try {
		await kyClient.post("post/", {
			next: { tags: ["createPost"] },
			json: postData,
		});

		return { success: true, message: "Post created successfully!" };
	} catch (
		error: any // eslint-disable-line
	) {
		console.log(error.message);

		return {
			success: false,
			message: "Failed to create post. Please try again later.",
		};
	}
};

export default createOnePost;
