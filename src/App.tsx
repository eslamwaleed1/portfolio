import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { BrowserRouter, Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./components/Layout";
import { SocialLinks } from "./components/SocialLinks";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { ProjectGallery } from "./components/ProjectGallery";
import { getImagesForProject } from "./utils/imageLoader";
import type { Project } from "./data/projects";

const logoSlugs: Record<string, string> = {
	React: "react", "Node.js": "nodedotjs", "Express.js": "express", MongoDB: "mongodb",
	"TanStack Query": "reactquery", "Material UI": "mui", "React Router": "reactrouter",
	"Chart.js": "chartdotjs", "Lucide React": "lucide", JavaScript: "javascript", CSS: "css3",
};

function TechStack({ tags }: { tags: string[] }) {
	return <ul className="tech-stack" aria-label="Technology stack">{tags.map((tag) => <li className="tech-tag" key={tag}>
		{logoSlugs[tag] && <img src={`https://cdn.simpleicons.org/${logoSlugs[tag]}`} alt="" loading="lazy" />}{tag}
	</li>)}</ul>;
}

function SiteLayout() {
	const [theme, setTheme] = useState<"dark" | "light">(() => localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark");
	const toggleTheme = () => setTheme((current) => {
		const next = current === "dark" ? "light" : "dark";
		localStorage.setItem("portfolio-theme", next);
		return next;
	});
	return <Layout theme={theme} onToggleTheme={toggleTheme}><Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/projects/:projectId" element={<ProjectPage />} />
		<Route path="*" element={<Navigate to="/" replace />} />
	</Routes></Layout>;
}

function HomePage() {
	const branch = projects.find((project) => project.id === "branch-management-system")!;
	const otherProjects = projects.filter((project) => project.id !== branch.id);
	return <>
		<section className="hero section-wrap">
			<div className="hero-copy"><p className="eyebrow">{profile.subtitle}</p><h1>I solve problems by building practical, thoughtful software.</h1>
				<p className="lead">{profile.bio}</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDown size={16} /></a><SocialLinks /></div>
			</div><img className="hero-avatar" src={profile.avatar} alt={profile.name} />
		</section>
		<section id="projects" className="projects-section section-wrap"><div className="section-heading"><p className="eyebrow">Selected work</p><h2>Projects</h2></div>
			<ProjectCard project={branch} featured />
			<div className="project-list">{otherProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
		</section>
	</>;
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
	return <article className={`project-card ${featured ? "project-card-featured" : ""}`}>
		<Link className="project-card-image" to={`/projects/${project.id}`} aria-label={`View ${project.title}`}>
			<img src={project.imageUrl} alt={`${project.title} preview`} />
			<span className="image-link-label">View project <ArrowUpRight size={15} /></span>
		</Link>
		<div className="project-card-copy"><p className="eyebrow">{featured ? "Featured · Full stack MERN" : project.id === "gaze-flow" ? "Graduation project" : "Interactive game"}</p>
			<h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3><p className="project-description">{project.description}</p>
			{featured && <><p className="stack-label">Technology stack</p><TechStack tags={project.tags} /></>}
			<Link className="text-link" to={`/projects/${project.id}`}>Project details <ArrowRight size={16} /></Link>
		</div>
	</article>;
}

function ProjectPage() {
	const { projectId } = useParams();
	const project = projects.find((item) => item.id === projectId);
	if (!project) return <Navigate to="/" replace />;
	const gallery = getImagesForProject(project.screenshotsUrl ?? "");
	return <main className="detail-page section-wrap">
		<Link className="back-link" to="/">← All projects</Link>
		<div className="detail-heading"><p className="eyebrow">{project.id === "gaze-flow" ? "Graduation project" : project.id === "branch-management-system" ? "Featured · Full stack MERN" : "Interactive game"}</p>
			<h1>{project.title}</h1><p className="lead">{project.description}</p>
			<div className="detail-actions">{project.demoUrl && <a className="button button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a>}
				{project.githubUrl && <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={16} /> Source code</a>}</div>
		</div>
		<section className="detail-block"><p className="eyebrow">Gallery</p><h2>Screenshots & videos</h2><ProjectGallery items={gallery} title={project.title} /></section>
		<section className="detail-block"><p className="eyebrow">Built with</p><h2>Technology stack</h2><TechStack tags={project.tags} /></section>
	</main>;
}

export default function App() {
	return <BrowserRouter><SiteLayout /></BrowserRouter>;
}
