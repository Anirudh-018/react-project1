function Modal(props) {
    return (
      <div className='modal'>
        <p>Delete TO DO</p>
        <button className='btn btn--alt' onClick={props.onClick}>Cancel</button>
        <button className='btn'>Confirm</button>
      </div>
    );
  }
  
  export default Modal;