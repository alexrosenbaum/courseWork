import { useState, useEffect } from "react";
import Form from "./View/Components/Form";
import NoteList from "./View/Components/NoteList";
import "./View/Styles/global.scss";
import Switch from "./View/Components/Switch";
import SideBar from "./View/Components/SideBar";
import Canvas from "./View/Components/Canvas";
import Draggable from "react-draggable";

function App() {
 

  const [title, setTitle] = useState('');
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const [drawing, setDrawing] = useState();
  const [color, setColor] = useState(true);
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState();
  

  // const submitNoteHandler = (ev: any) => {
  //   ev.preventDefault();
  //   setDate(date);
  // };

  return (
    <div className={color ? "white" : "black"}>
      <Switch color={color} setColor={setColor} />

      <div className="App-header">
        <Form
          date={date}
          setDate={setDate}
          title={title}
          setTitle={setTitle}
          note={notes}
          setNotes={setNotes}
        />

        <NoteList
          date={date}
          setDate={setDate}
          title={title}
          setTitle={setTitle}
          notes={notes}
          setNotes={setNotes}
          tag={tag}
          drawing={drawing}
          content={content}
          note={undefined}
          id={undefined}
        />
        <SideBar />
        <Canvas />
      </div>
    </div>
  );
}

export default App;
