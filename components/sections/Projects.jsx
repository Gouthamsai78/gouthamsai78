"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "PromptShare AI",
    desc: "The Instagram for AI creators. A social platform for sharing AI-generated content, prompts, and tools — with real-time notifications, AI prompt enhancement, and image-to-prompt generation.",
    tags: ["React", "Supabase", "OpenRouter", "Real-time"],
    link: "https://promptshareai1.vercel.app/",
  },
  {
    number: "02",
    title: "AI Coder",
    desc: "Build production-ready HTML apps through natural conversation. Powered by Google Gemini and OpenRouter with Monaco editor, live preview, visual diff system, and one-click deploy to CodePen/Gist.",
    tags: ["React", "TypeScript", "Gemini", "Monaco"],
    link: "https://aicoderbygoutham.vercel.app/",
  },
  {
    number: "03",
    title: "Jarvis AI Assistant",
    desc: "A Jarvis-like AI that controls your laptop via hand gestures, voice commands, and AI automation. Built with Google ADK agent, MediaPipe gesture detection, and Gemini vision.",
    tags: ["Python", "Google ADK", "MediaPipe", "Gemini"],
    link: "https://github.com/Gouthamsai78/jarvis",
  },
  {
    number: "04",
    title: "WhatsApp Automation",
    desc: "Production-grade WhatsApp bot with AI-powered replies, conversation memory, web dashboard, broadcast messaging, and CSV export. Built for real business owners.",
    tags: ["Node.js", "WhatsApp API", "OpenRouter", "Socket.io"],
    link: "https://github.com/Gouthamsai78/whatsapp-automation",
  },
  {
    number: "05",
    title: "Custom Models",
    desc: "Building and fine-tuning ChatGPT-like models using free Google Compute resources, LoRAs, and LangChain. Published on Hugging Face.",
    tags: ["LLMs", "LoRA", "LangChain", "Hugging Face"],
    link: "https://huggingface.co/gouthamsai78",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

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

      tl.from(labelRef.current, { y: 30, opacity: 0, duration: 0.5 })
        .from(titleRef.current, { y: 50, opacity: 0, duration: 0.7 }, "-=0.3");

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-projects" ref={sectionRef}>
      <div className="container">
        <span className="section-label" ref={labelRef}>
          04 — Projects
        </span>
        <h2 className="projects-title" ref={titleRef}>
          Building the AI Era.
        </h2>
        <div className="projects-list">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <span className="card-number">{project.number}</span>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.desc}</p>
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="card-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
