import { Link, useParams } from "react-router-dom";
import { notes } from "../data/site";

export default function Note() {
  const { slug } = useParams();
  const note = notes.find((item) => item.id === slug);

  if (!note) {
    return (
      <main className="frame hero">
        <h1>Note not found</h1>
        <p className="back">
          <Link to="/writing">Writing</Link>
        </p>
      </main>
    );
  }

  return (
    <main>
      <article className="wrap">
        <header className="hero">
          <p className="back">
            <Link to="/writing">Writing</Link>
          </p>
          <h1>{note.title}</h1>
          <p className="meta">{note.date}</p>
        </header>
        <div className="prose">
          {note.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
