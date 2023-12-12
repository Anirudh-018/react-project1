function Todo(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn">delete</button>
      </div>
    </div>
  );
}
export default Todo;
