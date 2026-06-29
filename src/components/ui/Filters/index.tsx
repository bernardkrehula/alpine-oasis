import type { FiltersType } from "#/types/ui.types.ts/filters.type.ts/FiltersType";
import Filter from "./Filter";
import "./index.css";

const Filters = ({ filtersData, handleFilter, activeFilter }: FiltersType) => {
  return (
    <menu className="filters">
      {filtersData.map((filter) => {
        return (
          <Filter
            filter={filter}
            handleFilter={handleFilter}
            activeFilter={activeFilter}
          />
        );
      })}
    </menu>
  );
};
export default Filters;
