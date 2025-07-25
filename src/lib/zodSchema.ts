import z from "zod";

export const postSchema = z.object({
	title: z.string().min(2, {
		message: "Title must be at least 2 characters long.",
	}),
	content: z.string().min(10, {
		message: "Content must be at least 10 characters long.",
	}),
	dateCreated: z.date(),
});
export const postUpdateSchema = z.object({
	title: z.string().min(2, {
		message: "Title must be at least 2 characters long.",
	}),
	content: z.string().min(10, {
		message: "Content must be at least 10 characters long.",
	}),
	dateCreated: z.date(),
});
