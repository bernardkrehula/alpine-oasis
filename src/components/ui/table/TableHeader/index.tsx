import "./index.css";

const TableHeader = ({ theadData, difference }) => {
  return (
    <tr>
      {theadData.map((row) => {
        const { name, className } = row;

        return (
          <th key={name} className={className}>
            <span>{name}</span>
          </th>
        );
      })}
      {Array.from({ length: difference }).map((_, index) => {
        return <th key={index}></th>;
      })}
    </tr>
  );
};
export default TableHeader;
