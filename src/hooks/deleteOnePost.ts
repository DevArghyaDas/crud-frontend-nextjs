"use client";
import kyClient from "@/lib/ky/kyClient";

const deleteOnePost = async (param: string) => {
	try {
		await kyClient.delete(`post/${param}`, {
			next: { tags: ["deletePost"] },
		});

		return { success: true, message: "Post deleted successfully!" };
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

export default deleteOnePost;
