// src/components/animated-section.tsx
"use client";

import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    if (node) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      });
      observer.observe(node);
      observerRef.current = observer;
    }
  }, []);

  return (
    <section ref={setRef} id={id} className={cn("scroll-animate", className)}>
      {children}
    </section>
  );
}