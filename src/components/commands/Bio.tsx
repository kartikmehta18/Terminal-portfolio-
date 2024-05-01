import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin, SiLinktree, SiTwitter, SiWhatsapp } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/kartikmehta18",
			text: "@kartikmehta18",
		},
		{
			title: "LinkedIn",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/kartik-mehta-%F0%9F%94%9C-witconf-6729b0255/",
			text: "@kartikmehta.png",
		},
		{
			title: "Twitter",
			Icon: SiTwitter,
			href: "https://twitter.com/kartikmehta_png",
			text: "@kartikmehta_png",
		},
		{
			title: "Community",
			Icon: SiWhatsapp,
			href: "https://chat.whatsapp.com/EfbFZbjjLlt5aSJp4KSdnv",
			text: "The Cyborgs",
		},
		{
			title: "Linktree",
			Icon: SiLinktree,
			href: "https://linktr.ee/kartikmehta18",
			text: "kartikmehta18",
		},
		
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="kartik.png"
					alt="Kartik Mehta"
					className="w-40 h-40 rounded-full border-4 border-green-600"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Kartik Mehta</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 20 years ago.</p>
				</div>
			</div>
			<p>
				Hi there, I am a Front-end developer and Ambassador at @pushprotocol , IDEA LAB , Co-Fouder of The CyborI like to learn new things related to coding.
				Other than coding, I also love doing UI/UX Web & Graphic Designing,Video Editing and photography !
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
