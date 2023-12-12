import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups"; // Assuming AllMeetups.js contains the AllMeetups component
import Favourites from "./pages/Favourites"; // Assuming Favourites.js contains the Favourites component
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation/>
      <div>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </div>
    </Router>
  );
}

export default App;
