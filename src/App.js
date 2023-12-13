import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups"; // Assuming AllMeetups.js contains the AllMeetups component
import Favourites from "./pages/Favourites"; // Assuming Favourites.js contains the Favourites component
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import AddNewMeetups from "./pages/AddNewMeetup";
function App() {
  return (
    <Layout>
      <Router>
        <MainNavigation />
        <div>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/newMeetups">
            <AddNewMeetups />
          </Route>
        </div>
      </Router>
    </Layout>
  );
}

export default App;
