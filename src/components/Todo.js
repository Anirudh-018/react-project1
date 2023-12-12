import Backdrop from "./Backdrop";
import Modal from "./Modal.jsx";
import { useState } from "react";
function Todo(props) {
  //show here is the state of the element
  //setModal is a function to update or change the state
  const [show, setModal] = useState(false);
  function deleteHandler() {
    setModal(true);
  }
  function closeModal(){
    setModal(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          delete
        </button>
      </div>
      {show ? <Modal onClick={closeModal}/> : null}
      {show && <Backdrop onClick={closeModal}/>}
    </div>
  );
}
export default Todo;
