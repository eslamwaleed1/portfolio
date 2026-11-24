import BranchSystemImage from "../assets/project_screenshots/branch_management_system/1 (1).png";
import AssemblyEndgameImage from "../assets/project_screenshots/assembly_endgame/2.png";
import GraduationProjectImage from "../assets/project_screenshots/gazeflow/4.png";
import OrganicHarvestImage from "../assets/project_screenshots/organic_harvest/OH (1).png";

export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	imageUrl: string;
	githubUrl?: string;
	githubUrls?: { label: string; url: string }[];
	demoUrl?: string;
	screenshotsUrl?: string;
}

export const projects: Project[] = [
	{
		id: "organic-harvest",
		title: "Organic Harvest",
		description:
			"A web store for users to browse and purchase organic products, with a management dashboard for admins to manage products, orders, customers, and the store.",
		tags: [
			"React",
			"Node.js",
			"Express.js",
			"MongoDB",
			"React Router",
			"REST APIs",
		],
		imageUrl: OrganicHarvestImage,
		demoUrl: "https://organic-harvest-ecommerce-frontend.vercel.app",
		githubUrls: [
			{
				label: "Frontend",
				url: "https://github.com/eslamwaleed1/organic-harvest-ecommerce-frontend",
			},
			{
				label: "Backend",
				url: "https://github.com/eslamwaleed1/organic-harvest-ecommerce-backend",
			},
		],
		screenshotsUrl: "../assets/project_screenshots/organic_harvest/",
	},
	{
		id: "branch-management-system",
		title: "Branch Management System",
		description:
			"A full stack platform for managing branch operations, tracking business performance, and bringing key data into one clear dashboard.",
		tags: [
			"React",
			"Node.js",
			"Express.js",
			"MongoDB",
			"TanStack Query",
			"Material UI",
			"React Router",
			"Chart.js",
			"Lucide React",
			"REST APIs",
		],
		imageUrl: BranchSystemImage,
		demoUrl: "https://branch-management-system-seven.vercel.app/",
		githubUrls: [
			{
				label: "Frontend",
				url: "https://github.com/eslamwaleed1/branch-management-system",
			},
			{
				label: "Backend",
				url: "https://github.com/eslamwaleed1/branch-management-system-backend-express",
			},
		],
		screenshotsUrl: "../assets/project_screenshots/branch_management_system/",
	},
	{
		id: "gaze-flow",
		title: "Gaze Flow",
		description:
			"A graduation project exploring hands-free phone access through eye tracking and voice commands, combining mobile development with assistive technology.",
		tags: ["Flutter", "Dart", "Kotlin", "PyTorch", "Eyedid SDK", "Figma"],
		imageUrl: GraduationProjectImage,
		githubUrl: "https://github.com/eslamwaleed1/gaze-flow-eye-tracking-voice-app",
		screenshotsUrl: "../assets/project_screenshots/gazeflow/",
	},
	{
		id: "assembly-endgame",
		title: "Assembly: Endgame",
		description:
			"A word guessing game inspired by Hangman. Guess letters, reveal the hidden word, and keep the programming languages alive.",
		tags: ["React", "JavaScript", "CSS"],
		imageUrl: AssemblyEndgameImage,
		demoUrl: "https://assemblyendgame-ten.vercel.app/",
		githubUrl: "https://github.com/eslamwaleed1/assembly_endgame",
		screenshotsUrl: "../assets/project_screenshots/assembly_endgame",
	},
];
