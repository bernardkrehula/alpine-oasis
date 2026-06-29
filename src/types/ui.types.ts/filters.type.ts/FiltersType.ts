import type { ActiveApratmentFilter } from "../../pagest.types.ts/ApartmentPage.types.ts/ActiveApratmentFilter.type";
import type { FilterData } from "./FilterData";
import type { HandleFilter } from "./FilterType";

export type FiltersType = {
  filtersData: FilterData[];
  handleFilter: HandleFilter;
  activeFilter: ActiveApratmentFilter;
};
