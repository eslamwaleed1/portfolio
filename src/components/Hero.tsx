import { profile } from "../data/profile";
import { SocialLinks } from "./SocialLinks";
import { ArrowDown } from "lucide-react";

export function Hero() {
	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
			{/* Background Elements */}
			<div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
			<div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000" />

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
					{/* Text Content */}
					<div className="flex-1 text-center md:text-left order-2 md:order-1">
						<div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
							{profile.subtitle}
						</div>
						<h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
							Hi, I'm <br />
							<span className="text-gradient">{profile.name}</span>
						</h1>
						<p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
							{profile.bio}
						</p>

						<div className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
							<SocialLinks />
							<a
								href="#projects"
								className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2"
							>
								View Projects
								<ArrowDown size={18} />
							</a>
						</div>
					</div>

					{/* Image */}
					<div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
						<div className="relative w-64 h-64 md:w-96 md:h-96">
							<div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse" />
							<img
								src={profile.avatar}
								alt={profile.name}
								className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl hover:opacity-85"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<a href="#projects">
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
					<ArrowDown size={24} />
				</div>
			</a>
		</section>
	);
}
