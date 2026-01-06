import { cn } from "@/lib/utils";

const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <div className={cn("text-center mb-12 md:mb-16", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono gradient-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan" />
      </div>
    </div>
  );
};

export default SectionTitle;
