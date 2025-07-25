import DisplayCard from "@/components/customui/DisplayCard";
import getAllPost from "@/hooks/getAllPost";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | CRUD",
	description: "Home page of CRUD application",
};

const page = async () => {
	const { data, message } = await getAllPost();

	// if (!success || !data) {
	// 	return <div>Error loading posts!</div>;
	// }

	if (data === null) {
		return <div className="">{message}</div>;
	}

	// console.log(data);

	return (
		<>
			<section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{data.map((card, index) => (
					<DisplayCard
						key={index}
						info={card}
					/>
				))}
			</section>
		</>
	);
};

export default page;
