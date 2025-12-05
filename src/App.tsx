import { useState } from "react";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";
import { GalleryOverlay } from "./components/GalleryOverlay";
import { getImagesForProject } from "./utils/imageLoader";

export default function App() {
	const graduationProject = projects.filter(
		(p) => p.category === "Graduation Project"
	);
	const reactProjects = projects.filter((p) => p.category === "React");
	const vanillaProjects = projects.filter((p) => p.category === "Vanilla JS");
	const responsiveDesignProjects = projects.filter(
		(p) => p.category === "Responsive Design"
	);
	const flutterProjects = projects.filter((p) => p.category === "Flutter");

	const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<{ original: string; thumbnail: string }[]>([]);

	function showScreenshots(projectPath: string) {
    const images = getImagesForProject(projectPath);
    setGalleryImages(images);
    setSelectedProject(projectPath);
	}

  function closeGallery() {
    setSelectedProject(null);
    setGalleryImages([]);
  }

	return (
		<Layout>
			<Hero />

			<div id="projects" className="space-y-10">
				<Section
					title="Graduation Project"
					subtitle="My Bachelor's degree Graduation Project"
				>
					<div className="grid grid-cols-1 md:grid-cols-3">
						{graduationProject.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
								mobileImage={true}
                handleClick={() => project.screenshotsUrl && showScreenshots(project.screenshotsUrl)}
							/>
						))}
					</div>
				</Section>

				<Section
					title="React Projects"
					subtitle="Modern web applications built with React ecosystem"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{reactProjects.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
								mobileImage={false}
								handleClick={() => project.screenshotsUrl && showScreenshots(project.screenshotsUrl)}
							/>
						))}
					</div>
				</Section>

				<Section
					title="Vanilla JS Projects"
					subtitle="Fundamental web development projects"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{vanillaProjects.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
								mobileImage={false}
                handleClick={() => project.screenshotsUrl && showScreenshots(project.screenshotsUrl)}
							/>
						))}
					</div>
				</Section>

				<Section
					title="Responsive Design Projects"
					subtitle="Fundamental web projects."
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{responsiveDesignProjects.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
								mobileImage={false}
                handleClick={() => project.screenshotsUrl && showScreenshots(project.screenshotsUrl)}
							/>
						))}
					</div>
				</Section>

				<Section
					title="Flutter Projects"
					subtitle="Flutter projects for mobile."
					className="bg-white/5"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{flutterProjects.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
								mobileImage={false}
                handleClick={() => project.screenshotsUrl && showScreenshots(project.screenshotsUrl)}
							/>
						))}
					</div>
				</Section>
				
        {selectedProject && (
          <GalleryOverlay images={galleryImages} onClose={closeGallery} />
        )}
			</div> 
		</Layout>
	);
}
