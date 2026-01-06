import { cn } from "@/lib/utils";

const GlassCard = ({ children, className, hover = true }) => {
  return (
    <div className={cn(hover ? "glass-card-hover" : "glass-card", "p-6", className)}>
      {children}
    </div>
  );
};

export default GlassCard;
