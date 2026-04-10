"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const linksRef = useRef(null);
  const [grassHover, setGrassHover] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "top 15%",
          scrub: 1,
        },
      });

      tl.from(titleRef.current, {
        y: 100,
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          textRef.current,
          { y: 40, opacity: 0, duration: 0.6 },
          "-=0.4"
        )
        .from(
          linksRef.current?.children || [],
          { y: 20, opacity: 0, stagger: 0.15, duration: 0.5 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-cta" ref={sectionRef}>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title" ref={titleRef}>
            Don&apos;t be the
            <br />
            next Kodak.
          </h2>
          <p className="cta-text" ref={textRef}>
            If you aren&apos;t adapting to AI, you&apos;re risking your future.
            <br />
            Let&apos;s build something that survives.
          </p>
          <div className="cta-links" ref={linksRef}>
            <a
              href="https://github.com/Gouthamsai78"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gouthamsai78"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              LinkedIn
            </a>
            <a
              href="https://huggingface.co/gouthamsai78"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              Hugging Face
            </a>
            <span
              className="cta-link fake-grass"
              onMouseEnter={() => setGrassHover(true)}
              onMouseLeave={() => setGrassHover(false)}
            >
              Touch Grass
              <span
                className={`grass-tooltip ${grassHover ? "visible" : ""}`}
              >
                I would but I&apos;m busy building 🌱
              </span>
            </span>
          </div>
        </div>
        <footer className="site-footer">
          <p>&copy; 2026 Gautam Sai. All rights reserved.</p>
          <p className="footer-note">Built with obsession, not templates.</p>
        </footer>
      </div>
    </section>
  );
}
