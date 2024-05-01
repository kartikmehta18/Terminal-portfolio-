import About from "../components/commands/About";
import Bio from "../components/commands/Bio";
import Contact from "../components/commands/Contact";
import Help from "../components/commands/Help";
import NotFound from "../components/commands/NotFound";
import Projects from "../components/commands/Projects";
import Skills from "../components/commands/Skills";
import events from"../components/commands/events";
import { CmdHistory } from "../type";

function renderCmd(cmd: string): CmdHistory {
	switch (cmd) {
		case "help":
			return {
				cmd,
				Component: Help,
				time: "",
			};
		case "bio":
			return {
				cmd,
				Component: Bio,
				time: "",
			};
			case "events":
			return {
				cmd,
				Component: events,
				time: "",
			};
		case "skills":
			return {
				cmd,
				Component: Skills,
				time: "",
			};
		case "contact":
			return {
				cmd,
				Component: Contact,
				time: "",
			};
		case "projects":
			return {
				cmd,
				Component: Projects,
				time: "",
			};
		case "about": {
			return {
				cmd,
				Component: About,
				time: "",
			};
		}
		default:
			return {
				cmd,
				Component: NotFound,
				time: "",
			};
	}
}

export default renderCmd;
