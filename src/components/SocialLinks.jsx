import { Github, Linkedin, Code2 } from "lucide-react";

const socialData = [
  {
    name: "GitHub",
    url: "https://github.com/SrujalAudarya",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/srujal-audarya-172b59248/",
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/SrujalAudarya/",
    icon: Code2,
  },
];

const SocialLinks = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialData.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[size]} flex items-center justify-center rounded-lg glass-card border border-glass-border/50 text-muted-foreground hover:text-primary hover:border-neon-blue/50 hover:shadow-[0_0_15px_hsl(var(--neon-blue)/0.3)] transition-all duration-300`}
          aria-label={social.name}
        >
          <social.icon size={iconSizes[size]} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
