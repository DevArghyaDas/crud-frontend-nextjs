"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
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
import { Separator } from "@/components/shadcnui/separator";
import { Textarea } from "@/components/shadcnui/textarea";
import createOnePost from "@/hooks/createOnePost";
import { postRefetchAction } from "@/lib/action";
import { PostSchemaType } from "@/lib/types";
import { postSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const CreateContentForm = () => {
	const date = new Date();
	const router = useRouter();
	const form = useForm<PostSchemaType>({
		defaultValues: {
			title: "",
			content: "",
			dateCreated: date,
		},
		resolver: zodResolver(postSchema),
		mode: "all",
	});
	// ...

	const onSubmit = async (data: PostSchemaType) => {
		console.log(data);

		const { success, message } = await createOnePost(data);
		if (success) {
			form.reset();

			await postRefetchAction();

			router.push("/");

			console.log(message);
		} else {
			console.log(message);
		}
	};

	return (
		<div className="">
			<h1 className="mb-5 text-center text-2xl font-bold">
				Write Something
			</h1>
			<div className="relative overflow-hidden">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-[350px] space-y-4 rounded-lg border p-4">
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
							Submit
						</Button>
					</form>
				</Form>
				<BorderBeam
					duration={6}
					size={400}
					borderWidth={2}
					className="from-transparent via-red-500 to-transparent"
				/>
				<BorderBeam
					duration={6}
					delay={3}
					size={400}
					borderWidth={2}
					className="from-transparent via-blue-500 to-transparent"
				/>
			</div>
		</div>
	);
};

export default CreateContentForm;
