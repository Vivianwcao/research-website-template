import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
	return (
		<div className="grid grid-cols-4 gap-x-2">
			<span className="text-xs text-zinc-500 mt-1">{experience.date}</span>
			<div className="col-span-3 flex flex-col">
				<h3 className="text-base font-serif">
					{experience.title} —{" "}
					{experience.companyUrl ? (
						<a
							href={experience.companyUrl}
							className="hover:text-zinc-600 transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							{experience.company}
						</a>
					) : (
						experience.company
					)}
					{experience.award && (
						<div className="group inline-flex ml-1 px-2 py-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-md items-center shadow-md border border-amber-100/50 relative overflow-hidden hover:rotate-1 transition-all duration-300">
							<div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
							<p className="text-xs text-amber-700 font-medium relative">
								{experience.award}
							</p>
						</div>
					)}
				</h3>
				{experience.advisor && (
					<p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
						{experience.advisor}
					</p>
				)}
				{experience.manager && (
					<p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
						Manager: {experience.manager}
					</p>
				)}
				{experience.description && (
					<div
						className="text-sm text-zinc-600 leading-relaxed mt-2"
						dangerouslySetInnerHTML={{ __html: experience.description }}
					></div>
				)}
			</div>
		</div>
	);
}
