import type { NavLinkType } from "../../../types/navbar.types.ts/NavLinkType";
import "./index.css";

const NavLink = ({ icon, reddirect, activeLink }: NavLinkType) => {
  const { id, name, svg } = icon;

  return (
    <li className={`nav-link ${activeLink[name] && 'active-link'}`} data-name={name} onClick={reddirect}>
      {svg}
      <a id={id}>{name}</a>
    </li>
  );
};
export default NavLink;
