import CreateContentForm from "@/components/customui/form/CreateContentForm";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Create | CRUD",
	description: "Create page of CRUD application",
};
const page = () => {
	return (
		<>
			<div className="grid h-[70dvh] place-items-center">
				<CreateContentForm />
			</div>
		</>
	);
};

export default page;
