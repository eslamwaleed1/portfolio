import { profile } from "../data/profile";

export function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      {profile.socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/10"
          title={social.name}
        >
          <img src={social.icon} alt={social.name} className="w-6 h-6 invert-0" />
        </a>
      ))}
    </div>
  );
}
