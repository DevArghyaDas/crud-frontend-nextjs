"use client";
import deleteOnePost from "@/hooks/deleteOnePost";
import { Button } from "../shadcnui/button";
import { postRefetchAction } from "@/lib/action";

const DeleteContentButton = ({ id }: { id: string }) => {
	const onDelete = async () => {
		const { success, message } = await deleteOnePost(id);
		if (success) {
			console.log(message);
			// Optionally, you can trigger a re-fetch of posts or update the UI accordingly
			await postRefetchAction();
		}
		if (!success) {
			console.log(message);
		}
	};
	return (
		<>
			<Button
				variant={"destructive"}
				className="cursor-pointer"
				onClick={async () => onDelete()}>
				Delete
			</Button>
		</>
	);
};

export default DeleteContentButton;
