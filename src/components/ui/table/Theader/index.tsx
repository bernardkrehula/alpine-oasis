import type { TheadDataType } from "#/types/ui.types.ts/table.types.ts/Table.type";

const Theader = ({ theadData }: { theadData: TheadDataType[] }) => {
  return (
    <thead>
      <tr>
        {theadData.map((th) => (
          <th key={th.name} className={th.className}>
            {th.name}
          </th>
        ))}
        <th />
      </tr>
    </thead>
  );
};
export default Theader;
