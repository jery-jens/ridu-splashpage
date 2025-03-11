"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(wrapperRef.current, { opacity: 1, duration: 1, ease: "0.625, 0.05, 0, 1" });
  });
  
  return <div ref={wrapperRef} className="min-h-screen w-screen opacity-0">{children}</div>;
}
