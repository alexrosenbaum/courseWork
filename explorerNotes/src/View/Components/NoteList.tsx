import Note from "./Note";


interface NoteListProps {
  title: any;
  tag: String;
  content: String;
  drawing: any;
  setTitle: any;
  notes: Array<any>;
  note: any;
  setNotes: any;
  id: any;
  date: any;
  setDate: Function;
}
const NoteList = (props: NoteListProps) => {
  const {
    date,
    setDate,
    id,
    notes,
    note,
    title,
    tag,
    content,
    drawing,
    setTitle,
    setNotes,
  } = props;
  return (
    <div>
      <div className="note-container">
        <ul className="note-list">
          {notes.map((note: any) => (
            <Note
            title={title}

              date={date}
              setDate={setDate}
              key={note.id}
              id={id}
              tag={note.tag}
              content={content}
              drawing={drawing}
              notes={notes}
              note={note}
              setNotes={setNotes}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoteList;
