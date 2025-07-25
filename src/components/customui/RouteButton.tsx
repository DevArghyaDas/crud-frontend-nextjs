"use client";
import { useRouter } from "next/navigation";
import { Button } from "../shadcnui/button";
import { PlusCircle } from "lucide-react";

const RouteButton = () => {
	const router = useRouter();
	return (
		<>
			<Button
				className="cursor-pointer"
				onClick={() => router.push("/addPost")}>
				Add <PlusCircle />
			</Button>
		</>
	);
};

export default RouteButton;
