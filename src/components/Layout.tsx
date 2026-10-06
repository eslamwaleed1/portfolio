import type { ReactNode } from "react";
import { Moon, Sun } from "lucide-react";
import { profile } from "../data/profile";

interface LayoutProps {
	children: ReactNode;
	theme: "dark" | "light";
	onToggleTheme: () => void;
}

export function Layout({ children, theme, onToggleTheme }: LayoutProps) {
	return <div className={`site-shell theme-${theme}`}>
		<header className="site-header"><a className="brand" href="/">{profile.name}<span>.</span></a>
			<nav className="site-nav"><a href="/#projects">Selected work</a><button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}<span>{theme === "dark" ? "Light mode" : "Dark mode"}</span></button></nav>
		</header>
		{children}
		<footer className="site-footer">© {new Date().getFullYear()} Eslam Waleed</footer>
	</div>;
}
