import classes from "./Card.module.css";
function Card(props) {
  console.log(props.children);
  //this is the generic ui component to simplify code and their children which has actual logic can be accessed using the .children property
  return <div className={classes.card}>{props.children}</div>
}
export default Card;
