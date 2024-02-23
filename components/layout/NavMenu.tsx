"use client";

import * as React from "react";
import { BookOpenCheck, ChevronsUpDownIcon, Hotel, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function NavMenu() {
	const router = useRouter();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<ChevronsUpDownIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => router.push("/hotel/new")}
					className="flex cursor-pointer gap-2 items-center">
					<Plus /> <span>Add Hotel</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => router.push("/my-hotels")}
					className="flex cursor-pointer gap-2 items-center">
					<Hotel /> <span>My Hotels</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => router.push("/my-bookings")}
					className="flex cursor-pointer gap-2 items-center">
					<BookOpenCheck /> <span>My Bookings</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
