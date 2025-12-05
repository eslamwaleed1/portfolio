import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-slate-200 selection:bg-primary/30 selection:text-primary-100">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
      <main className="relative z-10 flex flex-col">
        {children}
        
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 mt-20">
          <p>© {new Date().getFullYear()} Eslam Waleed. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
