import React from "react";
import { GiPerson } from "react-icons/gi";
import { SiBitcoin, SiWindowsterminal } from "react-icons/si";
export default function Projects() {
	const links = [
		{
			title: "AI-NF-SOL",
			Icon: SiBitcoin,
			href: "https://ai-nf-sol.vercel.app/",
			text: "Generate NFT just with few clicks & mint",
		},
		{
			title: "SnappCode",
			Icon: SiWindowsterminal,
			href: "#",
			text: "Take beautiful screenshots of you code",
		},
		{
			title: "Terminal Portfolio",
			Icon: GiPerson,
			href: "#",
			text: "My terminal based portfolio",
		},
		{
			title: "Learn Sophia",
			Icon: GiPerson,
			href: "https://learn-sophia.vercel.app/",
			text: " Sophia Language Learning site",
		},
		{
			title: "MedHub",
			Icon: GiPerson,
			href: "https://kartikmehta18.github.io/MedHub/",
			text: " Dr. at one step",
		},
	
		
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-2 text-yellow-200">
								<Icon />
                            <a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1  "
							>
								<h1>{title}</h1>
                                </a>
                    

							</div>
							
						</div>
					);
				})}
			</div>
		</div>
	);

}
