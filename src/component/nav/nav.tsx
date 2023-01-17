import "./nav.css";
import { NavLink } from "react-router-dom";
const Nav: React.FC = () => {
  return (
    <>
      <nav className="menu-container">
        <input type="checkbox" aria-label="Toggle menu" />
        <span></span>
        <span></span>
        <span></span>

        <a
          href="https://fr.wikipedia.org/wiki/Chinchilla"
          className="menu-logo"
        >
          <img
            src="https://chinclassifieds.com/wp-content/uploads/sitegraphics/logos/chinchillaclubLogo.png"
            alt="My Awesome Website"
          />
        </a>

        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">Mes héros</NavLink>
            </li>
            <li>
              <NavLink to="/count">Count</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/get">Get</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Nav;
