import { useEffect } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { projects } from "./data/site";
import CaseStudy from "./pages/CaseStudy.tsx";
import Home from "./pages/Home.tsx";
import Note from "./pages/Note.tsx";
import Writing from "./pages/Writing.tsx";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const slug = location.pathname.match(/^\/work\/([^/]+)/)?.[1];
    const project = projects.find((item) => item.id === slug);
    if (project) document.title = `${project.title} — Adedayo Olatunde`;
    else if (location.pathname.startsWith("/writing")) document.title = "Writing — Adedayo Olatunde";
    else document.title = "Adedayo Olatunde";
  }, [location.pathname]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        document.querySelector(location.hash)?.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
        });
        return;
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <Layout>
      <LayoutGroup>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            id="content"
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/work/:slug" element={<CaseStudy />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/writing/:slug" element={<Note />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </Layout>
  );
}
