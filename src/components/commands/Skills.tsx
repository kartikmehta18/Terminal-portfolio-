import ProgressBar from "../ProgressBar";
import {
	SiCanva,
	SiExpress,
	SiFigma,
	SiJavascript,
	SiMysql,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiViadeo,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiFigma,
			barWidth: "w-3.3/4",
			percentageValue: "95%",
			text: "Figma",
		},
		{
			Icon: SiReact,
			barWidth: "w-1/4",
			percentageValue: "25%",
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-2/6",
			percentageValue: "33%",
			text: "Tailwindcss",
		},
		{
			Icon: SiCanva,
			barWidth: "w-4/4",
			percentageValue: "100%",
			text: "Canva",
		},
		{
			Icon: SiMysql,
			barWidth: "w-3/4",
			percentageValue: "80%",
			text: "Mysql",
		},
		{
			Icon: SiJavascript,
			barWidth: "w-3/4",
			percentageValue: "80%",
			text: "Javascript",
		},
		
		
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
