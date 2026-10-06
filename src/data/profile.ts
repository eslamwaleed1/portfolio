import GitHubIcon from "../assets/icons/github_icon.svg";
import LinkedInIcon from "../assets/icons/linkedin_icon.svg";
import GmailIcon from "../assets/icons/gmail_icon.svg";
import PersonalPhotograph from "../assets/pictures/personal_photograph.jpg";

export const profile = {
  name: "Eslam Waleed",
  title: "Software Engineer",
  subtitle: "Software Engineer - Full Stack Developer",
  bio: "A detail-oriented Software Engineer enthusiastic about solving real-world problems through analysis, critical thinking, & implementation.",
  avatar: PersonalPhotograph,
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/eslamwaleed1",
      icon: GitHubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/eslam-waleed-800866255/",
      icon: LinkedInIcon,
    },
    {
      name: "Email",
      url: "mailto:eslamwaleed.eng@gmail.com",
      icon: GmailIcon,
      label: "eslamwaleed.eng@gmail.com",
    },
  ],
};
