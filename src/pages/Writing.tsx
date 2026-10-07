import { Link } from "react-router-dom";
import { notes } from "../data/site";

export default function Writing() {
  return (
    <main>
      <div className="wrap">
        <header className="hero">
          <h1>Writing</h1>
        </header>
        {notes.length === 0 ? (
          <p className="empty">No notes yet.</p>
        ) : (
          <ul className="writing-list">
            {notes.map((note) => (
              <li key={note.id}>
                <h2>
                  <Link to={`/writing/${note.id}`}>{note.title}</Link>
                </h2>
                <p className="summary">{note.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
