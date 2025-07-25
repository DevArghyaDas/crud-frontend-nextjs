import Link from "next/link";
import RouteButton from "../customui/RouteButton";
import ThemeToggleButton from "../customui/ThemeToggleButton";

const Header = () => {
	return (
		<header
			className="fixed top-0 w-full border-b bg-neutral-200/25 shadow backdrop-blur-lg dark:bg-neutral-900/25"
			aria-label="app-header">
			<div className="container mx-auto flex items-center justify-between px-6 py-3">
				<Link href={"/"}>
					<h1
						className="text-2xl font-semibold"
						aria-label="App Name">
						CRUD App
					</h1>
				</Link>

				<nav className="flex items-center gap-4">
					<Link href={"/"}>Home</Link>
					<RouteButton />

					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
