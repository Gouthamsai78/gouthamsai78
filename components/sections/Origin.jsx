"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Origin() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const specRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 20%",
          scrub: 1,
        },
      });

      tl.from(labelRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
      })
        .from(titleRef.current, { y: 50, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(textRef.current, { y: 40, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(specRef.current, { x: 40, opacity: 0, duration: 0.6 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-origin" ref={sectionRef}>
      <div className="container">
        <div className="sticky-wrapper">
          <div className="origin-content">
            <span className="section-label" ref={labelRef}>
              01 — Origin
            </span>
            <h2 className="origin-title" ref={titleRef}>
              It started with a
              <br />
              broken laptop
              <br />
              in 7th grade.
            </h2>
            <div className="origin-text" ref={textRef}>
              <p>
                During the COVID lockdown, I didn&apos;t have a working computer.
                My uncle gave me a scrapped laptop. I didn&apos;t ignore it.
              </p>
              <p>
                I opened the hood, researched on YouTube, learned to solder, fixed
                the RAM and hard drive, and installed my own OS.
              </p>
              <p>
                To understand how software actually worked, I installed pirated
                games just to dissect the files.
              </p>
            </div>
          </div>
          <div className="spec-box" ref={specRef}>
            <div className="spec-label">7th Grade — System Specs</div>
            <pre>
              <code>
{`RAM:      2GB → 8GB
HDD:      Replaced
OS:       Fresh Install
Solder:   Self-taught
Status:   Alive`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
