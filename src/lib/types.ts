import { ReactNode } from "react";
import z from "zod";
import { postSchema, postUpdateSchema } from "./zodSchema";

export type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type DisplayCardPropType = {
	id: string;
	title: string;
	content: string;
	dateCreated: string;
};

export type PostSchemaType = z.infer<typeof postSchema>;
export type PostUpdateSchemaType = z.infer<typeof postUpdateSchema>;

export type DefautResponseType<T> = {
	data: T;
};
