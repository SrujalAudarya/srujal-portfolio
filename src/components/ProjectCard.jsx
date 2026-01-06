import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import GlassCard from "./GlassCard";

const ProjectCard = ({
  title,
  description,
  features,
  techStack,
  githubUrl,
  liveUrl,
}) => {
  return (
    <GlassCard className="h-full flex flex-col group">
      {/* Header with gradient line */}
      <div className="mb-4">
        <div className="h-1 w-16 rounded-full bg-primary mb-4 group-hover:w-24 transition-all duration-500" />
        <h3 className="text-xl md:text-2xl font-mono font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <div className="mb-6 flex-grow">
        <h4 className="text-sm font-semibold text-foreground mb-2 font-mono">
          Key Features:
        </h4>
        <ul className="space-y-1">
          {features.map((feature) => (
            <li
              key={feature}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="text-primary mt-1">▸</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/30">
        <Button variant="glass" size="sm" asChild>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github size={16} />
            View Code
          </a>
        </Button>
        {liveUrl && (
          <Button variant="neon" size="sm" asChild>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
