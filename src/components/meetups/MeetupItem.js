import FavouritesContext from '../../pages/favs-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';
function MeetupItem(props) {
  const favContext=useContext(FavouritesContext);
  const isFav=favContext.itemIsFav(props.id)
  function toggleFavs(){
    if(isFav){
      favContext.removeFavs(props.id);
    }
    else{
      favContext.addFavs({
        id:props.id,
        title:props.title,
        description:props.description,
        image:props.image,
        adderss:props.address
      })
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavs}>{isFav?"remove Fav":"add to fav"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;