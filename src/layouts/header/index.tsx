import { useState } from "react";
import "./index.css";
import Icon from "./Icon";

const Header = () => {
  const [theme, setTheme] = useState<boolean>(false);

  const changeTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <header className="main-header">
      <img className="profile-photo" src="profilePhoto.png" alt="" />
      <h1>Elena Novak</h1>
      <div className="icons">
        <Icon name="user" variation="secondary"/>
        {theme ? (
          <Icon name="black$theme" onClick={changeTheme} variation="secondary"/>
        ) : (
          <Icon name="white$theme" onClick={changeTheme} variation="secondary"/>
        )}
        <Icon name="logout" variation="secondary"/>
      </div>
    </header>
  );
};
export default Header;
