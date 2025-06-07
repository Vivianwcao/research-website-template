export interface AboutMe {
	name: string;
	title: string;
	institution?: string;
	description: string;
	email: string;
	imageUrl?: string;
	blogUrl?: string;
	cvUrl?: string;
	googleScholarUrl?: string;
	twitterUsername?: string;
	githubUsername?: string;
	linkedinUsername?: string;
	funDescription?: string; // Gets placed in the left sidebar
	secretDescription?: string; // Gets placed in the bottom
	altName?: string;
	institutionUrl?: string;
}

export const aboutMe: AboutMe = {
	name: "Vivian Cao",
	title:
		"Software Engineer | Full-Stack Developer | JavaScript, React, NodeJS, SQL, Python, Java, AWS, Deveops",
	// institution: "BCIT",
	// Note that links work in the description
	description: `Hi, my name is Vivian Cao. I’m a software developer based in Vancouver, 
  BC🍁, who loves solving problems and paying attention to the little details.<br /><br />
  I have a diploma in Computer Systems Technology, majoring in Cloud Computing,
  mainly focused on DevOps engineering and AWS configurations. Along the way,
  I’ve built web applications using JavaScript and SQL/NoSQL on different platforms,
  developed Android apps with Dart (Flutter) in Android Studio, and explored algorithms,
  design patterns, and OS concepts in Python, Java, and C.<br /><br /> Recently,
  I completed the Software Engineering Diploma Program at BrainStation,
  where I focused on building full stack web applications using React, Sass, and MySQL/PostgreSQL.
  My projects also involved working with non relational databases like Firestore(Firebase) and
  <a href="https://deckofcardsapi.com/" target="_blank" style="text-decoration: none"><i>Deck Of Cards</i></a> REST API,
  which you can see in my latest Capstone project
  <a href="https://blackjackroyalebyvivian.netlify.app" target="_blank" style="color: #991194"><i><b>Blackjack Royale</b></i></a>. I also incorporated MongoDB and serverless functions in my mini project
  <a href="https://simplydonebyvivian.vercel.app" target="_blank" style="color: #991194"><i><b>SimplyDone</b></i></a>, a to-do app.<br /><br />

  Lately, I have been diving into React ES19 hooks, design patterns, optimization techniques,
  and JWT authentication. As someone who enjoys math and algorithms,
  I love thinking back and forth about different mechanisms.
  When there is time, another mini game is definitely on my to do list,
  something similar to
  <a href="https://blackjackroyalebyvivian.netlify.app" target="_blank" style="color: #991194"><i><b>Blackjack Royale</b></i></a> but with more algorithms and calculations.<br /><br />
  Outside of coding, you might catch me lost in thought at a grocery store,
  trying to recall last night’s coding lesson. 😅 I also love baking🍰, gardening🪻, painting🎨,
  and figure skating. If you have cake recipes, gardening tips, or cool watercolor tricks, let’s chat.
  I would love to hear about them!❤️`,
	email: "vivian.w.cao@gmail.com",
	imageUrl: "/images/me.png",
	//googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
	githubUsername: "vivianwcao",
	linkedinUsername: "vivianwcao",
	//twitterUsername: "janesmith",
	//blogUrl: "https://",
	cvUrl:
		"https://docs.google.com/document/d/1cD3iN-tFr_TXScpu5LkBnEeOyMs3-6JxtyKi-GoWuUE/edit?usp=sharing",
	//institutionUrl: "https://www.stanford.edu",
	//altName: "",
	secretDescription:
		"Passionate baker🍰, watercolor painter and figure skater⛸️",
};
