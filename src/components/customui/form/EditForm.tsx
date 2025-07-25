"use client";
import { Button } from "@/components/shadcnui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/shadcnui/form";
import { Input } from "@/components/shadcnui/input";
import { Textarea } from "@/components/shadcnui/textarea";
import editPost from "@/hooks/editPost";
import { postRefetchAction } from "@/lib/action";
import { DisplayCardPropType, PostUpdateSchemaType } from "@/lib/types";
import { postUpdateSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-separator";
import { useForm } from "react-hook-form";

const EditForm = ({ info }: { info: DisplayCardPropType }) => {
	// const [, setOpen] = useAtom(modelOpenAtom,{});

	const date = new Date();
	const form = useForm<PostUpdateSchemaType>({
		defaultValues: {
			title: info.title,
			content: info.content,
			dateCreated: date,
		},
		resolver: zodResolver(postUpdateSchema),
	});

	const onSubmit = async (data: PostUpdateSchemaType) => {
		console.log("Form Data:", data);

		const { success, message } = await editPost(info.id, data);

		if (!success) {
			console.log(message);
		}
		if (success) {
			console.log(message);
			await postRefetchAction();
			// setOpen(false);
		}
	};
	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full space-y-4 p-1">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your title"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									This is the title of your post.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="content"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Content</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Write your content here"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Separator />
					<Button
						type="submit"
						className="w-full cursor-pointer">
						Save
					</Button>
				</form>
			</Form>
		</>
	);
};

export default EditForm;
