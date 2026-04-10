"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const scrollLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }).from(
        subRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

      gsap.to(scrollLineRef.current, {
        scaleY: 1.3,
        opacity: 0.8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-title-wrapper">
          <h1 className="hero-title" ref={titleRef}>
            Pivot or Perish.
          </h1>
        </div>
        <p className="hero-sub" ref={subRef}>
          BlackBerry failed. Kodak failed. Nokia failed.
          <br />
          I refused to make the same mistake.
          <br />
          I&apos;m <strong>Goutham Sai</strong>, a 16-year-old AI Developer
          and founder of Guys Media.
        </p>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to read</span>
        <div className="scroll-line" ref={scrollLineRef} />
      </div>
    </section>
  );
}
