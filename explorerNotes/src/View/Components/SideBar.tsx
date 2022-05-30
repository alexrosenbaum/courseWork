import Draggable from "react-draggable";
// interface DraggableData {
//   node: HTMLElement;
//   x: Number;
//   y: Number;
//   deltaX: Number;
//   deltaY: Number;
//   lastX: number;
//   lastY: number;
// }

// props: DraggableData

const SideBar = () => {
  // const { node, x, y, deltaX, deltaY, lastX, lastY } = props;

  // const handleDragEvent = (e: Event, data: DraggableData) => {
  //   false;
    
  //   console.log(e,data);
    
  // };

  return (
    // onDrag={handleDragEvent}
    <Draggable >
      <div className="lineSeparator"></div>
    </Draggable>
  );
};

export default SideBar;
