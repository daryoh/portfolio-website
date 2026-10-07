import { motion, useScroll, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { notes, person } from "../data/site";

export default function Layout({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="frame bar">
          <Link className="brand" to="/">
            <span className="mark" aria-hidden="true">
              AO
            </span>
            <span>{person.name}</span>
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-list">
              <li>
                <Link to="/#work">Work</Link>
              </li>
              <li>
                <Link to="/#experience">Experience</Link>
              </li>
              {notes.length > 0 && (
                <li>
                  <Link to="/writing">Writing</Link>
                </li>
              )}
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
              <li>
                <a href={person.resumePath} download>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <p className="status">
            <span className="pulse" aria-hidden="true"></span>
            Open to roles
          </p>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="frame footer-bar">
          <p>Adedayo Olatunde</p>
          <p>Lead backend engineer</p>
        </div>
      </footer>
    </>
  );
}
