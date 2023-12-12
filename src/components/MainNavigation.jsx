import { Link } from "react-router-dom/cjs/react-router-dom.min";

import classes from "./MainNav.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
