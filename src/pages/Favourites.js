import { useContext } from "react";
import FavouritesContext from "./favs-context";
import MeetupList from "../components/meetups/MeetupList";
function Favourites() {
  const favContext = useContext(FavouritesContext);
  let content;
  if(favContext.total===0){
    content=<p>no favs</p>
    
  }
  else{
    content=<MeetupList meetups={favContext.favourites}></MeetupList>
  }
  return (
    <section>
      <h1>fav meetups</h1>
      {content}
    </section>
  );
}
export default Favourites;
