import Note from "./components/Note";

const App = (props) => {
  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(
          // ÄLÄ tee näin: key={i}! Itemin indeksin käyttö avaimena voi
          // breakata koko sovelluksen!
          (note) => (
            <>
              <Note key={note.id} note={note} />
              <br />
            </>
          )
        )}
      </ul>
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
