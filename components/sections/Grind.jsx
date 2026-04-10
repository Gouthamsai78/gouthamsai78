"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Grind() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const codeRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 15%",
          scrub: 1,
        },
      });

      tl.from(labelRef.current, { y: 30, opacity: 0, duration: 0.5 })
        .from(titleRef.current, { y: 60, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(textRef.current, { y: 40, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(codeRef.current, { scale: 0.95, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(techRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-grind" ref={sectionRef}>
      <div className="container">
        <span className="section-label" ref={labelRef}>
          02 — The Grind
        </span>
        <h2 className="grind-title" ref={titleRef}>
          Hardware to Code.
        </h2>
        <div className="grind-grid">
          <div className="grind-text" ref={textRef}>
            <p>
              I wanted to build apps, so I bypassed traditional education. Using
              free resources, I taught myself <code>HTML</code>, <code>React</code>,
              and <code>Python</code>.
            </p>
            <p>
              I built my first small apps, including a mini-movie streaming
              platform. I thought I had my career mapped out.
            </p>
          </div>
          <div className="code-block" ref={codeRef}>
            <pre>
              <code>
{`// era: 2022-2023
const developer = {
  name: "Goutham",
  stack: ["HTML", "CSS", "React", "Python"],
  projects: ["MovieApp", "Portfolio_v1"],
  mindset: "traditional_coding"
};

while (comfortable) {
  developer.build();
}`}
              </code>
            </pre>
          </div>
        </div>
        <div className="tech-stack" ref={techRef}>
          <span className="tech-item">HTML</span>
          <span className="tech-item">CSS</span>
          <span className="tech-item">JavaScript</span>
          <span className="tech-item">React</span>
          <span className="tech-item">Python</span>
        </div>
      </div>
    </section>
  );
}
