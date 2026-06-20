import { useNavigate } from "react-router-dom";
import "./index.css";
import NavLink from "./navLink";
import { navLinksIcons } from "./navLinksIcons";
import { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState({
    home: false,
    bookings: false,
    apartments: false,
    users: false,
    settings: false
  })
  const navigate = useNavigate();

  const reddirect = (e: React.MouseEvent<HTMLLIElement>) => {
    const name = e.currentTarget.dataset.name;
    setActiveLink((prev) => {
      const active = Object.fromEntries(
        Object.entries(prev).map(([icon]) =>
          icon === name ? [name, true] : [icon, false],
        ),
      );
      return active as typeof activeLink;
    });
    /* setActiveLink(); */
    /* navigate(`/${link}`); */
  };
  //Promijeniti da navlink nije <Li> nego btn i da ne koristi data-name nego name 
  return (
    <aside className="navbar">
      <div className="logo-content">
        <img src="./logo.png" />
        <h1>Alpine Osais</h1>
      </div>
      <nav className="nav-links">
        {navLinksIcons.map((icon) => {
          return <NavLink key={icon.id} icon={icon} reddirect={reddirect} activeLink={activeLink}/>;
        })}
      </nav>
    </aside>
  );
};
export default NavBar;
