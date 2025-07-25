"use client";

import { useEffect, useState } from "react";

import { useMediaQuery } from "@react-hook/media-query";

import { Button } from "@/components/shadcnui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/shadcnui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/shadcnui/drawer";
import { DisplayCardPropType } from "@/lib/types";
import EditForm from "./form/EditForm";

const EditContentModel = ({ info }: { info: DisplayCardPropType }) => {
	const [open, setOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	if (isDesktop) {
		return (
			<Dialog
				open={open}
				onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button className="cursor-pointer">Edit Post</Button>
				</DialogTrigger>
				<DialogContent className="flex flex-col justify-center sm:w-[400px]">
					<DialogHeader>
						<DialogTitle>Edit Post</DialogTitle>
						<DialogDescription>
							Make changes to your post here. Click save when
							you&apos;re done.
						</DialogDescription>
					</DialogHeader>
					<EditForm info={info} />
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer
			open={open}
			onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button>Edit Post</Button>
			</DrawerTrigger>
			<DrawerContent className="px-8 py-4">
				<DrawerHeader className="text-left">
					<DrawerTitle>Edit Post</DrawerTitle>
					<DrawerDescription>
						Make changes to your profile here. Click save when
						you&apos;re done.
					</DrawerDescription>
				</DrawerHeader>
				<EditForm info={info} />
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default EditContentModel;
