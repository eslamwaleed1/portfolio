import GraduationProjectImage from "../assets/project_screenshots/gazeflow/4.png";
import BranchSystemImage from "../assets/project_screenshots/branch_management_system/1.png";
import AssemblyEndgameImage from "../assets/project_screenshots/assembly_endgame/2.png";
import ThisPortfolioImage from "../assets/project_screenshots/this_portfolio/1.png";
import ImageGalleryImage from "../assets/project_screenshots/vanilla_js_image_gallery/1.png";
import ResponsiveDesignOneImage from "../assets/project_screenshots/responsive_design_1/1.png";
import ResponsiveDesignTwoImage from "../assets/project_screenshots/responsive_design_2/2.png";
import ProductComponentImage from "../assets/project_screenshots/product_component_responsive/1.png";

export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	imageUrl?: string;
	githubUrl?: string;
  demoUrl?: string;
  screenshotsUrl?: string;
  hasVideos?: boolean;
  category:
  | "Graduation Project"
  | "React"
  | "Vanilla JS"
  | "Responsive Design"
  | "Flutter";
}

export const projects: Project[] = [
	{
		id: "1",
		title: "Gaze Flow",
		description:
			"A mobile app that integrates eye tracking with voice commands to allow full control on the phone without needing to touch the screen.",
		tags: ["Flutter", "Kotlin", "Eyedid SDK", "PyTorch", "Dart", "Figma"],
		category: "Graduation Project",
		imageUrl: GraduationProjectImage,
		githubUrl:
      "https://github.com/eslamwaleed1/gaze-flow-eye-tracking-voice-app",
    screenshotsUrl: "../assets/project_screenshots/gazeflow/",
    hasVideos: true,
	},
	{
		id: "2",
		title: "Branch Management System",
		description:
			"A comprehensive system to manage branch operations efficiently by ",
		tags: ["React", "JavaScript", "Tailwind", "React Router"],
		category: "React",
    imageUrl: BranchSystemImage,
    demoUrl: "https://branch-management-system-jf1a.vercel.app/",
		githubUrl: "https://github.com/eslamwaleed1/branch-management-system",
    screenshotsUrl: "../assets/project_screenshots/branch_management_system/",
	},
	{
		id: "3",
		title: "Assembly: Endgame",
		description:
			"A mini game that is basically a Hangman game, you guess the letters to reveal a word.",
		tags: ["React", "JavaScript", "React Router", "Tailwind"],
		category: "React",
    imageUrl: AssemblyEndgameImage,
    demoUrl: "https://assemblyendgame-ten.vercel.app/",
    githubUrl: "https://github.com/eslamwaleed1/assembly_endgame",
    screenshotsUrl: "../assets/project_screenshots/assembly_endgame"
	},
	{
		id: "4",
		title: "This Portfolio",
		description: "It's just this portfolio.",
		tags: ["React", "TypeSccipt", "Tailwind"],
		category: "React",
    imageUrl: ThisPortfolioImage,
    githubUrl: "https://github.com/eslamwaleed1/portfolio",
	},
	{
		id: "5",
		title: "Kasper",
		description:
			"Responsive big landing page for a business.",
		tags: ["HTML", "CSS"],
    category: "Responsive Design",
    imageUrl: ResponsiveDesignTwoImage,
    demoUrl: "https://html-css-2-nd-design.vercel.app/",
    githubUrl: "https://github.com/eslamwaleed1/HTML-CSS-2ND-Design",
    screenshotsUrl: "../assets/project_screenshots/responsive_design_2"
	},
	{
		id: "6",
		title: "Leon",
		description:
			"Responsive big landing page for a business.",
		tags: ["HTML", "CSS"],
    category: "Responsive Design",
    imageUrl: ResponsiveDesignOneImage,
    demoUrl: "https://html-css-1-st-design.vercel.app/",
    githubUrl: "https://github.com/eslamwaleed1/HTML-CSS-1ST-Design",
    screenshotsUrl: "../assets/project_screenshots/responsive_design_1"
	},
	{
		id: "7",
		title: "Product Component Design",
		description:
			"Product preview component responsive design.",
		tags: ["HTML", "CSS"],
    category: "Responsive Design",
    imageUrl: ProductComponentImage,
    demoUrl: "https://product-preview-card-component-eight-alpha.vercel.app/",
    githubUrl: "https://github.com/eslamwaleed1/Product-preview-card-component",
    screenshotsUrl: "../assets/project_screenshots/product_component_responsive"
	},
	{
		id: "8",
		title: "Image Gallery",
		description:
			"Navigate between images smoothly.",
		tags: ["JavaScript"],
    category: "Vanilla JS",
    imageUrl: ImageGalleryImage,
    githubUrl: "https://github.com/eslamwaleed1/javascript-small-projects",
    screenshotsUrl: "../assets/project_screenshots/vanilla_js_image_gallery"
	},
	{
		id: "9",
		title: "Favorite Series",
		description:
			"Simple yet elegant app to group favorite shows and tv series and mark favorite episodes, save screenshots & more.",
		tags: ["Flutter", "Dart", "API"],
		category: "Flutter",
		githubUrl: "https://github.com/eslamwaleed1/favorite_series_app",
	},
];
