"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pivot() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const comparisonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 10%",
          scrub: 1,
        },
      });

      tl.from(labelRef.current, { y: 30, opacity: 0, duration: 0.5 });

      // Animate each word individually
      const words = titleRef.current?.querySelectorAll(".pivot-word");
      if (words) {
        words.forEach((word, i) => {
          tl.from(
            word,
            { scale: 2.5, opacity: 0, duration: 0.6, ease: "power4.out" },
            i === 0 ? "-=0.3" : "-=0.35"
          );
        });
      }

      tl.from(textRef.current, { y: 40, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(
          comparisonRef.current,
          { y: 30, opacity: 0, duration: 0.6 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-pivot" ref={sectionRef}>
      <div className="container">
        <span className="section-label" ref={labelRef}>
          03 — The Shift
        </span>
        <h2 className="pivot-title" ref={titleRef}>
          <span className="pivot-word">Then</span>
          <br />
          <span className="pivot-word">ChatGPT</span>
          <br />
          <span className="pivot-word">Dropped.</span>
        </h2>
        <div className="pivot-content">
          <div className="pivot-text" ref={textRef}>
            <p>
              Traditional coding was suddenly vulnerable. My manual coding skills
              were no longer enough.
            </p>
            <p>I had a choice: stay comfortable or pivot.</p>
            <p className="pivot-emphasis">
              I remembered Nokia and Kodak.
            </p>
            <p>
              I scrapped my old roadmap and dove headfirst into AI development.
            </p>
          </div>
          <div className="comparison-stack" ref={comparisonRef}>
            <div className="comparison-item">
              <span className="company-name">Nokia</span>
              <span className="status">Refused to pivot → Dead</span>
            </div>
            <div className="comparison-item">
              <span className="company-name">Kodak</span>
              <span className="status">Refused to pivot → Dead</span>
            </div>
            <div className="comparison-item">
              <span className="company-name">BlackBerry</span>
              <span className="status">Refused to pivot → Dead</span>
            </div>
            <div className="comparison-item alive">
              <span className="company-name">Me</span>
              <span className="status">Pivoted to AI → Alive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
