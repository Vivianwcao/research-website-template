export interface Portfolio {
	title: string;
	description: string;
	technologies?: string[];
	imageUrl?: string;
	projectUrl?: string;
	codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
	// Example entry
	{
		title: "Blackjack Royale",
		description:
			"Blackjack Royale is an online multiplayer Blackjack game where players can log in with Gmail or Outlook account, and either start a new game or join an existing one on the lobby page. Multiple games can run at the same time in separate rooms, allowing different groups to play without interfering with each other. Firestore database handles real-time updates, making the gameplay smooth and interactive.",
		technologies: [
			"React.js",
			"JavaScript",
			"Vite",
			"Axios",
			"Firebase Authentification",
			"Firestore real-time database",
			"Rest API",
			"CSS",
			"SASS",
		],
		projectUrl: "https://blackjackroyalebyvivian.netlify.app/",
		imageUrl: "https://i.imgur.com/nAMzOKh.gif",
		codeUrl:
			"https://github.com/Vivianwcao/blackjack-multiplayer-react-project/tree/v4css",
	},
	{
		title: "SimplyDone To-do App",
		description:
			"A to-do app that lets users add new entries, modify entry titles, and create or update sublists.",
		technologies: [
			"React.js",
			"JavaScript",
			"MongoDB",
			"CSS",
			"Node.js",
			"Express",
			"Serverless functions",
		],
		projectUrl: "https://simplydonebyvivian.vercel.app/",
		imageUrl: "https://i.imgur.com/rsfyxLC.gif",
		codeUrl: "https://github.com/Vivianwcao/Mern-Todo-list",
	},
	{
		title: "BizBot AI",
		description:
			"A 24-hour Microsoft Industry Hackathon team project implemented by team of seven. BizBot AI delivers a crystal-clear AI adoption plan tailored to each business's unique needs, transforming AI complexity into accessible business value for Microsoft users.",
		technologies: [
			"React.js",
			"JavaScript",
			"Google Gemini Copilot",
			"CSS",
			"SASS",
		],
		projectUrl: "https://yvonnelutrinh.github.io/microsoft-hackathon-bizbot/",
		imageUrl: "https://i.imgur.com/gGsFkuQ.gif",
		codeUrl: "https://github.com/AAdemide/industry-project-team2",
	},
	{
		title: "Snaps",
		description:
			"Snaps is a photo-sharing application built with React and Sass, allowing users to upload pictures and leave comments on individual images.",
		technologies: ["React.js", "JavaScript", "CSS", "SASS", "REST API"],
		projectUrl: "https://snapsphotogallery.netlify.app/",
		imageUrl: "https://i.imgur.com/LHoGjxw.gif",
		codeUrl: "https://snapsphotogallery.netlify.app/",
	},
	{
		title: "Bandsite",
		description:
			"Bandsite is a prototype website built for a music band using JavaScript and Sass, featuring show schedules, band introductions, and a comment section for users to share their thoughts on the latest album.",
		technologies: ["JavaScript", "HTML5", "CSS", "SASS", "REST API"],
		projectUrl: "https://bandsiteconcert.netlify.app/",
		imageUrl: "https://i.imgur.com/9WsWG4k.gif",
		codeUrl: "https://bandsiteconcert.netlify.app/",
	},
];
