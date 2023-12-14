import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  total: 0,
  addFavs: (favouriteMeetup) => {},
  removeFavs: (meetupId) => {},
  itemIsFav: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);
  function addFavouritesHandler(favouriteMeetup) {
    // setUserFavourites(userFavourites.concat(favouriteMeetup))  this is slow so pass the functions with prev array and then append;
    setUserFavourites((prevFavs) => {
      return prevFavs.concat(favouriteMeetup);
    });
  }
  function removeFavouritesHandler(meetupId) {
    //filter returns true and then retains and the false to delete
    setUserFavourites((prevFavs) => {
      return prevFavs.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemsIsFavouritesHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }
  const context = {
    favourites: userFavourites,
    total: userFavourites.length,
    addFavs: addFavouritesHandler,
    removeFavs: removeFavouritesHandler,
    itemIsFav: itemsIsFavouritesHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}
export default FavouritesContext;
