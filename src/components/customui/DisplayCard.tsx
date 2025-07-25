"use client";

import { DisplayCardPropType } from "@/lib/types";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "../shadcnui/card";
import DeleteContentButton from "./DeleteContentButton";
import EditContentModel from "./EditContentModel";

const DisplayCard = ({ info }: { info: DisplayCardPropType }) => {
	return (
		<>
			<Card className="h-fit w-full md:min-w-[300px]">
				<CardContent className="space-y-3">
					<div className="flex items-center gap-4">
						<Image
							src={"/media/profile.png"}
							alt="next-img"
							height={150}
							width={150}
							className="size-16 rounded-full bg-sky-500 p-1"
						/>
						<div className="space-y-1">
							<h1 className="text-xl font-semibold">
								Anonymous Doe
							</h1>
							<h2>{info.dateCreated.substring(0, 10)}</h2>
						</div>
					</div>
					<div className="font-bold">{info.title}</div>
					<div className="">{info.content}</div>
				</CardContent>
				<CardFooter className="grid grid-cols-2 gap-4">
					<EditContentModel info={info} />
					<DeleteContentButton id={info.id} />
				</CardFooter>
			</Card>
		</>
	);
};

export default DisplayCard;
