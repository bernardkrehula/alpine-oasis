import type { NavLinkType } from "#/types/navbar.types.ts/NavLinkType";
import "./index.css";

const NavLink = ({ icon, reddirect, activeLink }: NavLinkType) => {
  const { id, name, path } = icon;

  return (
    <li
      className={`nav-link ${activeLink[name as keyof typeof activeLink] && "active-link"}`}
      data-name={name}
      onClick={reddirect}
    >
      {path}
      <a id={id}>{name}</a>
    </li>
  );
};
export default NavLink;
