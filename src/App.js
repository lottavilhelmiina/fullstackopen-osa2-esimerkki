import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  // kontrolloitu komponentti, eräs päästä käsiksi käyttäjän syöttämään dataan
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      {notes.map(
        // ylempi tapa mapata toimii niin kuin sitä edeltäväkin tapa
        (note) => (
          //span toimii, jos halutaan renderöidä sisältö samalle riville
          <span key={note.id} note={note}>
            {note.id}{" "}
          </span>
        )
      )}
    </div>
  );
};

export default App;
