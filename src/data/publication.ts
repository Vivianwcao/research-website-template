export interface Publication {
	title: string;
	tldr?: string;
	year?: string;
	conference?: string;
	authors?: string;
	paperUrl?: string;
	codeUrl?: string;
	bibtex?: string;
	imageUrl?: string;
	award?: string;
}

export const publicationData: Publication[] = [
	// // If you don't want to show publications, just make the array empty.
	// {
	// 	// year: "2024",
	// 	// conference: "NeurIPS",
	// 	title: "Me making pizza",
	// 	// authors: "Jane Smith, Sarah Johnson, Yue Zhang",
	// 	// paperUrl: "https://arxiv.org/abs/2409.15476",
	// 	// codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
	// 	//bibtex: "https://arxiv.org/abs/2409.15476.bib",
	// 	// tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
	// 	imageUrl: "https://i.imgur.com/OfQNkxj.png",
	// 	// award: "🏆 Best Paper Award",
	// 	// if you have an image in public/images, you can use it like this:
	// 	// imageUrl: "/images/publication-image.jpg"
	// },
];
