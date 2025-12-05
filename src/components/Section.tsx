import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 relative ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className="text-center mb-16 max-w-2xl mx-auto">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient inline-block">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-400 text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
