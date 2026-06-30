import "./index.css";
import TableData from "./TableData";
import TableHeader from "./TableHeader";

const Table = ({ theadData, tbodyData }) => {
  return (
    <table>
      <thead>
        {theadData.map((row) => {
          return <TableHeader row={row} />;
        })}
      </thead>
      <tbody>
        {tbodyData.map((row) => {
          return <TableData row={row} />;
        })}
      </tbody>
    </table>
  );
};
export default Table;
