export interface Education {
	year: string;
	institution: string;
	degree: string;
	major?: string;
	advisor?: string;
	thesis?: string;
	thesisUrl?: string;
}

export const educationData: Education[] = [
	// If you don't want to show education, just make the array empty.
	{
		year: "2025 — 2025",
		institution: "BrainStation",
		degree: "Software Engineering diploma program",
		major: "Full Stack Web App Development",
	},
	{
		year: "2020 — 2022",
		institution: "British Columbia Institute of Technology",
		degree: "Diploma in Computer System Technology",
		major: "Cloud Computing",
	},
	{
		year: "2016 — 2018",
		institution: "Capilano University",
		degree: "Diploma in Costuming for Stage and Screen",
	},
	{
		year: "2014 — 2014",
		institution: "British Columbia Institute of Technology",
		degree: "Color Theory for Design & Graphics",
	},
];
