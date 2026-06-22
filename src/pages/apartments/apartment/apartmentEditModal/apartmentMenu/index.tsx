import { ApartmentMenuConfig, svgConfig } from "./apartmentMenuConfig";
import "./index.css";

const ApartmentMenu = ({onClick}: {onClick: () => void;}) => {
  return (
    <div className="apartment-menu">
      {ApartmentMenuConfig.map((menu) => {
        const { name, path } = menu;
        return (
          <div onClick={onClick}>
            <svg
              {...svgConfig}
            >
              {path.map((d, index) => {
                return <path key={index} d={d} />;
              })}
            </svg>
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default ApartmentMenu;
