import {
  HomeIcon,
  AboutIcon,
  SkillsIcon,
  ProjectsIcon,
} from "@/components/icons";

export class Routes {
  static ROUTES_LIST = [
    { id: "home", href: "#home", name: "Home", icon: HomeIcon },
    { id: "about", href: "#about", name: "About", icon: AboutIcon },
    { id: "skills", href: "#skills", name: "Skills", icon: SkillsIcon },
    { id: "projects", href: "#projects", name: "Projects", icon: ProjectsIcon },
  ];

  static HOME = {
    id: "home",
    href: "#home",
    name: "Home",
    icon: HomeIcon,
  };
  static ABOUT = {
    id: "about",
    href: "#about",
    name: "About",
    icon: AboutIcon,
  };
  static SKILLS = {
    id: "skills",
    href: "#skills",
    name: "Skills",
    icon: SkillsIcon,
  };
  static PROJECTS = {
    id: "projects",
    href: "#projects",
    name: "Projects",
    icon: ProjectsIcon,
  };
}
