import "./index.css";
import Option from "./option";

const Select = ({ options, size }) => {
    console.log(options)
  return (
    <select className={`select ${size}`}>
      {options.map((option) => {
        return <Option option={option} />;
      })}
    </select>
  );
};
export default Select;
