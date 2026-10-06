import { profile } from "../data/profile";

export function SocialLinks() {
  return (
    <div className="social-links">
      {profile.socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title={social.name}
        >
          <img src={social.icon} alt={social.name} className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
