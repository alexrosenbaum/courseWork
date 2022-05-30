import { GrDocumentText } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";

interface ListProps {
  title: any;
  note: Array<string>;
  setTitle: Function;
  setNotes: Function;
  date: any;
  setDate: Function;
}
const Form = (props: ListProps) => {
  const { date, setDate, title, note, setTitle, setNotes } = props;



  const submitNoteHandler = (ev: any) => {

    ev.preventDefault();
    const date = new Date();
   
    setNotes([...note,title])
  };

  return (
    <section className="form">
      <form onSubmit={e => {submitNoteHandler(e)}}>
        <h3>
          <GrDocumentText />
          {note.length}
        </h3>

        <input
          className="form-input"
          placeholder="Add Note"
          type="text"
          name="items"
          onChange={e => setTitle(e.target.value)}
        />
        <button>
          <GrAdd type="submit" style={{ fontSize: "30px" }} />
        </button>
      </form>
    </section>
  );
};

export default Form;
