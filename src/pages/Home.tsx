import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Constellation from "../components/Constellation";
import {
  education,
  experience,
  person,
  projects,
  signals,
  toolGroups,
  training,
} from "../data/site";

function productLinks(point: string) {
  const parts = point.split(/(CivilDrive|TruckingDrive)/g);
  return parts.map((part, index) => {
    if (part === "CivilDrive" || part === "TruckingDrive") {
      const slug = part === "CivilDrive" ? "civildrive" : "truckingdrive";
      return (
        <Link key={`${part}-${index}`} className="inline-link" to={`/work/${slug}`}>
          {part}
        </Link>
      );
    }
    return part;
  });
}

export default function Home() {
  return (
    <main>
      <header className="mast">
        <div className="frame">
          <p className="kicker">
            <span className="pulse" aria-hidden="true"></span>
            {person.availability}
          </p>
          <h1>{person.headline}</h1>
          <p className="lede">{person.roles}</p>
          <div className="actions">
            <Link className="btn btn-primary" to="/#work">
              Selected work
            </Link>
            <a className="btn" href={person.resumePath} download>
              Resume
            </a>
          </div>
          <ul className="signals">
            {signals.map((signal) => (
              <li key={`${signal.source}-${signal.label}`}>
                <p className="signal-value">{signal.value}</p>
                <p className="signal-label">{signal.label}</p>
                <p className="signal-source">{signal.source}</p>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section id="work" className="frame band" aria-labelledby="work-heading">
        <p className="kicker">Selected work</p>
        <h2 id="work-heading">Production systems</h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <article key={project.id} className="stage">
              <div className="stage-top">
                <span className="stage-index">0{index + 1}</span>
                {project.url && (
                  <a className="stage-live" href={project.url} rel="noopener noreferrer">
                    {project.urlLabel}
                  </a>
                )}
              </div>
              <Link className="stage-hit" to={`/work/${project.id}`}>
                <motion.h3 layoutId={project.id}>{project.title}</motion.h3>
                <p className="stage-summary">{project.summary}</p>
                <Constellation index={index} />
                <ul className="stack" aria-label="Stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="stage-go">
                  Case study <span aria-hidden="true">→</span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="frame band" aria-labelledby="experience-heading">
        <p className="kicker">Roles</p>
        <h2 id="experience-heading">Experience</h2>
        {experience.map((job) => (
          <article key={job.role} className="role reveal in">
            <p className="when">{job.dates}</p>
            <div>
              <h3>{job.role}</h3>
              <p className="org">{job.place ? `${job.org} · ${job.place}` : job.org}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{job.org === "Civil Drive" ? productLinks(point) : point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <div className="frame split">
        <section id="tools" className="panel" aria-labelledby="tools-heading">
          <p className="kicker">Stack</p>
          <h2 id="tools-heading">Tools</h2>
          {toolGroups.map((group) => (
            <div key={group.label} className="tool-row">
              <p>{group.label}</p>
              <ul>
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="education" className="panel" aria-labelledby="education-heading">
          <p className="kicker">Background</p>
          <h2 id="education-heading">Education</h2>
          <div className="edu-grid">
            {[...education, ...training].map((item) => (
              <article key={item.credential}>
                <p className="when">{item.year}</p>
                <h3>{item.credential}</h3>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section id="contact" className="frame band" aria-labelledby="contact-heading">
        <div className="contact-panel">
          <div>
            <p className="kicker">Contact</p>
            <h2 id="contact-heading">{person.availability}</h2>
            <p className="email-line">{person.email}</p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${person.email}`}>
              Email
            </a>
            <ul className="contact-links">
              <li>
                <a href={person.linkedin} rel="me noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={person.github} rel="me noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={person.resumePath} download>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
