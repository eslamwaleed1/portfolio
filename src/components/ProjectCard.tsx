import GitHubIcon from "../assets/icons/github_icon.svg";
import { ExternalLink, Image } from "lucide-react";
import type { MouseEventHandler } from "react";
import type { Project } from "../data/projects";
interface ProjectCardProps {
	project: Project;
  mobileImage?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export function ProjectCard({ project, mobileImage = false, handleClick = (() => {}) as MouseEventHandler<HTMLButtonElement> }: ProjectCardProps) {
	return (
		<div className="group relative rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
      <div className={`${mobileImage ? "max-h-100 items-end" : "h-48 items-center"} bg-linear-to-br from-slate-800 to-slate-900 flex justify-center overflow-hidden`}>
				{project.imageUrl ? (
					<img
						src={project.imageUrl}
						alt={project.title}
						className={` ${
							mobileImage ? "h-[500px] w-fit transform-[translateY(92px)]" : "h-full w-full"
						} object-cover transition-transform duration-700 group-hover:scale-110`}
					/>
				) : (
					<div className="text-6xl opacity-20 font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
						{project.title[0]}
					</div>
				)}

				{/* Overlay */}
				<div className="hidden absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex items-center justify-center gap-4 backdrop-blur-sm">
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
							title="View Code"
						>
							<img src={GitHubIcon} className="w-7" />
						</a>
					)}
					{project.demoUrl && (
						<a
							href={project.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-4 rounded-full bg-primary/80 hover:bg-primary text-white transition-all hover:scale-110"
							title="Live Demo"
						>
              <ExternalLink size={20} />
						</a>
					)}
          {project.screenshotsUrl && (
            <button
              onClick={handleClick}
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 cursor-pointer"
              title="Show Screenshots"
            >
              <Image size={20} />
            </button>
          )}
				</div>
			</div>

			<div className="p-6">
				<div className="flex justify-between items-start mb-4">
					<div>
						<span className="text-xs font-medium text-primary mb-2 block tracking-wider uppercase">
							{project.category}
						</span>
						<h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
							{project.title}
						</h3>
					</div>
				</div>

				<p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-2 mt-auto">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
						>
							{tag}
						</span>
					))}
        </div>
        <div className="px-5 flex justify-around mt-4 md:hidden">
          {project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
							title="View Code"
						>
							<img src={GitHubIcon} className="w-7" />
						</a>
					)}
					{project.demoUrl && (
						<a
							href={project.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-4 rounded-full bg-primary/80 hover:bg-primary text-white transition-all hover:scale-110"
							title="Live Demo"
						>
              <ExternalLink size={20} />
						</a>
					)}
					{project.screenshotsUrl && (
						<button
							onClick={handleClick}
							className="p-4 rounded-full bg-primary/80 hover:bg-primary text-white transition-all hover:scale-110 cursor-pointer"
							title="Show Screenshots"
						>
							<Image size={20} />
						</button>
					)}
        </div>
        {project.hasVideos && (
          <div className="absolute bottom-66 sm:bottom-60 md:bottom-57 lg:bottom-52 2xl:bottom-40 right-4 md:right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            Video
          </div>
        )}
			</div>
		</div>
	);
}
