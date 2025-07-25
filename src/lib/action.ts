"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const postRefetchAction = async () => {
	revalidateTag("getAllPosts");

	revalidatePath("/");
};
