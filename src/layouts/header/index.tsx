import React, { useState } from "react";
import "./index.css";
import Icon from "./Icon";
import type { ActiveIconType } from "../../types/header.types.ts/ActiveIconType";
import { USER } from "../../config/userConfig";

const Header = () => {
  const [theme, setTheme] = useState<boolean>(false);
  const [activeIcon, setActiveIcon] = useState<ActiveIconType>({
    user: false,
    blackTheme: false,
    whiteTheme: false,
    logout: false,
  });
  const changeTheme = () => {
    setTheme((prev) => !prev);
  };
  const handleActiveIcon = (e: React.MouseEvent<HTMLLIElement>) => {
    const name = e.currentTarget.dataset.name;
    setActiveIcon((prev) => {
      const active = Object.fromEntries(
        Object.entries(prev).map(([icon]) =>
          icon === name ? [name, true] : [icon, false],
        ),
      );
      return active as typeof activeIcon;
    });
  };

  return (
    <header className="main-header">
      <img className="profile-photo" src={USER.photo} alt="" />
      <h1>{USER.name}</h1>
      <ul className="icons">
        <li data-name="user" onClick={handleActiveIcon}>
          <Icon name="user" variation="secondary" activeIcon={activeIcon} />
        </li>
        <li
          data-name={`${!theme ? "whiteTheme" : "blackTheme"}`}
          onClick={handleActiveIcon}
        >
          <Icon
            name={`${theme ? "whiteTheme" : "blackTheme"}`}
            onClick={changeTheme}
            activeIcon={activeIcon}
            variation="secondary"
          />
        </li>
        <li data-name="logout" onClick={handleActiveIcon}>
          <Icon name="logout" activeIcon={activeIcon} variation="secondary" />
        </li>
      </ul>
    </header>
  );
};
export default Header;
