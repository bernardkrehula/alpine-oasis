import type { NavLinkType } from "../../../types/navbar.types.ts/NavLinkType";
import "./index.css";

const NavLink = ({ icon, reddirect }: NavLinkType) => {
  const { id, name, svg } = icon;

  return (
    <li className="nav-link" onClick={() => reddirect(name)}>
      {svg}
      <a id={id}>{name}</a>
    </li>
  );
};
export default NavLink;
