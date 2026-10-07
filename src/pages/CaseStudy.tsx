import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import Constellation from "../components/Constellation";
import { projects } from "../data/site";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return (
      <main className="frame hero">
        <h1>Project not found</h1>
        <p className="back">
          <Link to="/#work">← Work</Link>
        </p>
      </main>
    );
  }

  const index = projects.findIndex((item) => item.id === project.id);

  return (
    <main>
      <header className="case-hero">
        <div className="frame">
          <p className="back">
            <Link to="/#work">← Work</Link>
          </p>
          <motion.h1 layoutId={project.id}>{project.title}</motion.h1>
          <p className="lede">{project.summary}</p>
          <p className="meta">
            {project.role} · {project.dates}
          </p>
          {project.url && (
            <p className="meta">
              <a href={project.url} rel="noopener noreferrer">
                {project.urlLabel}
              </a>
            </p>
          )}
          <Constellation index={index} />
        </div>
      </header>
      <div className="frame case-body">
        <div className="prose">
          {project.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              {paragraph.includes("Civil Drive experience entry") ? (
                <>
                  {paragraph.split("Civil Drive experience entry")[0]}
                  <Link to="/#experience">Civil Drive experience entry</Link>
                  {paragraph.split("Civil Drive experience entry")[1]}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
        <ul className="stack" aria-label="Stack">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
