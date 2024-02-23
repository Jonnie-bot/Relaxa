"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../SearchInput";
import { ThemeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
	const router = useRouter();
	const { userId } = useAuth();

	return (
		<div className="sticky top-0 border-b-primary/10 bg-secondary">
			<Container>
				<div className="flex justify-between items-center">
					<div
						className="flex items-center gap-1 cursor-pointer"
						onClick={() => router.push("/")}>
						<Image src="/relaxa1.svg" alt="logo" width="30" height="30" />
						<div className="font-bold text-xl">Relaxa</div>
					</div>
					<SearchInput />

					<div className="flex gap-3 items-center">
						<div>
							<ThemeToggle />
							<NavMenu />
						</div>
						<UserButton afterSignOutUrl="/" />
						{!userId && (
							<>
								<Button
									variant="outline"
									size="sm"
									onClick={() => router.push("/sign-in")}>
									Sign In
								</Button>
								<Button size="sm" onClick={() => router.push("/sign-up")}>
									Sign Up{" "}
								</Button>
							</>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};
export default NavBar;
