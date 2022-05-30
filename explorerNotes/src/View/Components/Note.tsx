import { FiCheck } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import Draggable from "react-draggable";
import { useState, useEffect } from "react";

interface NoteProps {
  title: any;
  tag: String;
  content: String;
  drawing: any;
  id: any;
  notes: Array<any>;
  note: any;
  setNotes: any;
  date: any;
  setDate: Function;
}

const Note = (props: NoteProps) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const {
    date,
    setDate,
    id,
    title,
    tag,
    content,
    drawing,
    notes,
    note,
    setNotes,
  } = props;

  // useEffect(() => {
  //   notes.addEventListener("keydown", (ev: any) => {
  //     console.log("works");
  //   });
  // });
// const canvas = getE
  const deleteHandler = (ev: any) => {
    setNotes(notes.filter((el) => el.id !== note.id));
  };

  const handleDragEvent = (ev: any, data: any) => {
    console.log("event type", ev.type);
    console.log(ev, data);
  };
  const today =
    "Last Modified" +
    " " +
    new Date().toLocaleDateString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="note">
      <Draggable onDrag={handleDragEvent}>
        <details id="noteblock" className="note_section">
          <summary className="title">{title} </summary>
          <p className="date">{today}</p>

          <div className="icon">
            <button>
              <FaPencilAlt className="edit-btn" />
            </button>
            <button>
              <FiCheck className="complete-btn" />
            </button>
            <button>
              <BsFillTrashFill onClick={deleteHandler} className="trash-btn" />
            </button>
          </div>

          <textarea
            id="content"
            placeholder="type to add a note"
            className="note_section_item--content"
          >
            {content}
          </textarea>
          <label htmlFor="drawingElement"></label>
          <canvas id="canvas" className="note_section_item--drawing">
            {drawing}
          </canvas>
        </details>
      </Draggable>
    </div>
  );
};

export default Note;
