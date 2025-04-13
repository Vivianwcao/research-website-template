export interface Experience {
	date: string;
	title: string;
	company: string;
	description?: string;
	advisor?: string;
	manager?: string;
	companyUrl?: string;
	award?: string;
}

export const experienceData: Experience[] = [
	{
		date: "Sep 2021 – Dec 2021",
		title: "Frontend Developer Intern",
		company: "TalentMarketplace",
		description:
			"Implemented scalable and reusable React components to deliver a fast and friendly user experience (UX).",
		advisor:
			"Language & framework: JavaScript, ReactJS, Node.JS, CSS, Rest API, Bitbucket, Docker.",
		companyUrl: "https://www.linkedin.com/company/talentmarketplace/",
	},
	{
		date: "Jan 2021 – May 2021",
		title: "Frontend Developer Intern",
		company: "CheckingIn",
		description:
			"Built an administrative dashboard for the CheckingIn web app to display and filter key data, enhancing data visualization and enabling better decision-making.",
		advisor: "Language & framework: ReactJS, Node.JS, CSS, Rest API.",

		companyUrl: "https://www.linkedin.com/company/checkingin-co/",
	},
	{
		date: "Jun 2022 – Current",
		title: "Member Service Representative",
		company: "Costco Langley",
		description:
			"Achieved the highest accuracy rate in merchandise scanning at the exit, reducing missed or unpaid items.",
		companyUrl: "https://www.costco.ca/",
	},
	{
		date: "Feb 2023 – Current",
		title: "Children’s Meeting Service Coordinator",
		company: "Local Church of Langley",
		description:
			"Collaborated with a team to plan schedules, manage resources, prepare snacks, Bible studies, singing sessions, crafts, and physical activities for children aged 3 to 13.",
	},
	{
		date: "Nov 2013 – Jan 2020",
		title: "Assistant Manager",
		company: "Virgin Mobile Canada Ltd.",
		award: "🏆No.1 Sales Nationwide 2019",
		description: `▸ Hit over 200 percent of my sales target in 2017, and ranked No. 1 nationwide in Virgin Mobile’s part time tier in 2018. 
		Earned a top performer trip to Costa Rica<br /><br />▸ Trained and supported five new team members in 2019,
		helping boost our upselling performance by 30 percent during the holiday season(Black Friday and Christmas)<br /><br />
		▸ Ensured smooth store operations, improving efficiency by recommending new processes for opening and closing procedures.`,

		companyUrl: "https://www.virginplus.ca/",
	},
];
